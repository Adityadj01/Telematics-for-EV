const port = 4000;
const express = require( "express" ) ;
const app = express();
const mongoose = require( "mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require('fs');

// Create the 'upload/images' directory if it doesn't exist
if (!fs.existsSync(path.join(__dirname, 'upload', 'images'))) {
  fs.mkdirSync(path.join(__dirname, 'upload', 'images'));
}

app.use(express.json());
app.use(cors());

//establishing a connection to a MongoDB database hosted on MongoDB Atlas.
mongoose.connect("mongodb+srv://telematics:Evdiagnose@cluster0.jnx3h5g.mongodb.net/EVDiagnose", {
    serverSelectionTimeoutMS: 15000, // Increase the timeout to 15 seconds
 });

//API Creation

app.get("/",(req,res) => {
    res.send("Express App is Running")
})

/* setting up a server to listen on a specific port (in this case, port 4000).
When the server starts running, it will log a message indicating that the server is running on the
specified port. If there is an error starting the server, it will log an error message instead. The
`app.listen()` function is a method in Express.js that starts a UNIX socket and listens for
connections on the specified port. */
app.listen (port, (error)=>{
    if (!error){
        console. log("Server Running on Port" +port)
    }
    else
    {
        console. log("Error : "+error)
    }
})

//Image Storage Engine

const storage=multer.diskStorage({
    destination: path.join(__dirname, "upload/images"),
    filename:(req,file,cb)=>{
        return cb(null,`${file. fieldname}__${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//create upload endpoint for images

app.use('/images', express.static(path.join(__dirname, 'upload/images')));

app.post('/upload', upload.single('product'), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
  
    // Add this block to handle errors
    if (req.file.error) {
      return res.status(400).json({ error: req.file.error });
    }
  
    console.log(req.file); // Log the uploaded file details
    res.json({
      success: 1,
      imagePath: `http://localhost:${port}/images/${req.file.filename}`
    });
  });

// schema creating for users

  const Users= mongoose.model('Users',{
    name: {
       type: String,
    },
    email:{
        type:String , 
        unique:true,
    },
    password:{
        type : String,
    },
    vehicleData:{
        type : Object,
    },
    date : {
        type : Date,
        default : Date.now,
    }
  })

//Creating Endpoint for registering the user

app.post('/register',function(req,res){
    let newUser = Users(req.body);
    newUser.save((err)=>{
        if(err) throw err;
        else{
                res.send("user is registered");
            }
        })
    })

app.post('/signup',async(req,res)=> {
    let check = await Users.findOne({email:req.body.email});
    if(check) {
        return res.status(400).json({success:false,error:"Existing email found with same email"})
    }
    let vehicle = {};

    for (let i = 0; i < 3; i++) {
            vehicle[i] = 0;
    }

    const user = new Users({
        name : req. body. username,
        email : req. body. email,
        password : req. body. password,
        vehicleData : vehicle,
    })

    await user.save();

    const data={
        user: {
            id:user.id
        }
    }
   
    const token = jwt.sign(data,'secret_eVD');
    res.json({success : true, token})
        
})
// Creating Endpoint for user Login
app.post( '/login' , async (req,res)=>{

    let user= await Users.findOne({email:req.body.email});
    if(user){
        const passCompare= req.body.password===user.password;
        if (passCompare) {
            const data ={
                user:{
                    id : user.id
                }
            }
            const token = jwt.sign(data,'secret_eVD');
            res.json({success : true, token})
        }else{
            res.json({success:false,error:"Wrong Password"});
        }
    }else{
        res.json({success: false, error:'Wrong Email ID'})
    }
})