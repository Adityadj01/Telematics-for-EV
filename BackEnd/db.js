const mongoose = require('mongoose');

async function mongoDB() {
    try {
        await mongoose.connect('mongodb+srv://telematics:Evdiagnose@cluster0.jnx3h5g.mongodb.net/EVDiagnose', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
        // const fetched data = awaitmongoose.connection.db.collection("mycollection");
        // fetched_data.find({}).toArray(function(err,data){
        //     if(err) console.log(err);
        //     else console.log(data);
        }
    catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

module.exports = mongoDB;
