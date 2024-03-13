const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydatabase';

// Create a new MongoClient
const client = new MongoClient(uri);

async function main() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db(dbName);

    // Perform operations with the database
    // For example, you can query documents from a collection
    const collection = database.collection('mycollection');
    const documents = await collection.find({}).toArray();
    console.log('Documents:', documents);
  } finally {
    // Close the connection when finished
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

main().catch(console.error);
