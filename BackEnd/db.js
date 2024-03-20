const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://evdiagnose:Corarj@12@cluster1.y4bxban.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1';
const mongoDB =async() =>{
   await mongoose.connect(mongoURI,{ useNewUrlParser: true },(err,result)=>{
   if(err) console.log("---",err);
   else{
    console.log("connected");
}
});

}

module.exports = mongoDB;