const mongoose = require('mongoose');

async function mongoDB() {
    try {
        await mongoose.connect('mongodb://mongodb+srv://evdiagnose:Corarj%4012@cluster1.y4bxban.mongodb.net//mydatabase', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
        const fetched data = awaitmongoose.connection.db.collection("mycollection");
        fetched_data.find({}).toArray(function(err,data){
            if(err) console.log(err);
            else console.log(data);
        })
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

module.exports = mongoDB;
