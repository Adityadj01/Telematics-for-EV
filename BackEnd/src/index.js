const port = 4000;
const express = require( " express " ) ;
const app = express();
const mongoose = require( "mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//establishing a connection to a MongoDB database hosted on MongoDB Atlas.
mongoose.connect("mongodb+srv://telematics:Evdiagnose@cluster0.jnx3h5g.mongodb.net/EVDiagnose")

/* setting up a server to listen on a specific port (in this case, port 4000).
When the server starts running, it will log a message indicating that the server is running on the
specified port. If there is an error starting the server, it will log an error message instead. The
`app.listen()` function is a method in Express.js that starts a UNIX socket and listens for
connections on the specified port. */
app. listen (port, (error)=>{
    if (!error){
        console. log("Server Running on Port" +port)
    }
    else
    {
        console. log("Error : "+error)
    }
})