const mongoose = require('mongoose');

async function mongoDB() {
    try {
        await mongoose.connect('mongodb+srv://telematics:Evdiagnose@cluster0.jnx3h5g.mongodb.net/EVDiagnose');
        console.log('Connected to MongoDB');

        // Accessing a collection
        const collection = mongoose.connection.db.collection("mycollection");

        // Fetching data from the collection
        collection.find({}).toArray(function(err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

module.exports = mongoDB;
