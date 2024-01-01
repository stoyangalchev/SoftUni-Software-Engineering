

const mongodb = require("mongodb"); // import mongodb module

const connectionStr = "mongodb://127.0.0.1:27017";  // default port

const client = new mongodb.MongoClient(connectionStr);  // connect to db

async function connectDb() {  // async function to connect to db
  await client.connect(); // await for connection to be established
  const db = client.db("DemoDB"); // get database
  const people = db.collection("cats"); // get collection
  const result = await people.find().toArray(); // get all documents from collection

  console.log(result);  // print result
}

connectDb();  // call function

