// const express = require('express');
// const bodyParser = require('body-parser');
// const { MongoClient } = require('mongodb');

// const app = express();
// const port = 5000;

// const uri = "mongodb+srv://mandarkelkarofficial:dtZkw6KYYwOfoi0X@mk.yhxx8he.mongodb.net/";
// const client = new MongoClient(uri);

// async function connect() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB!");
//     return client.db("HospitalMgDatabase");
//   } catch (error) {
//     console.error(error);
//   }
// }

// app.use(bodyParser.json());

// app.post('/new-entry', async (req, res) => {
//   const db = await connect();
//   const collection = db.collection('DoctorRecords');
//   const { dname, email, address } = req.body;
//   try {
//     const result = await collection.insertOne({ dname, email, address });
//     res.status(201).json({ message: 'Doctor added successfully', doctorId: result.insertedId });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Failed to add doctor' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
const { MongoClient } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

const uri = "mongodb+srv://mandarkelkarofficial:dtZkw6KYYwOfoi0X@mk.yhxx8he.mongodb.net/";
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    return client.db("HospitalMgDatabase");
  } catch (error) {
    console.error(error);
  }
}

async function createAttributesInCollection() {
  const db = await connect();
  const collection = db.collection('DoctorRecords');
  try {
    await collection.updateMany({}, { $set: { dname: "", email: "", address: "", city: "", state: "", postalCode: "", country: "", phoneNumber: "", qualification: "", licenseNumber: "" } });
    console.log("Attributes added to DoctorRecords collection");
  } catch (error) {
    console.error(error);
  }
}

// Create attributes in DoctorRecords collection
createAttributesInCollection();

app.use(bodyParser.json());

// Define your API routes below

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
