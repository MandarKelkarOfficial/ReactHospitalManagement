const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

// Replace with your actual MongoDB connection URI
const uri = "mongodb+srv://mandarkelkarofficial:dtZkw6KYYwOfoi0X@mk.yhxx8he.mongodb.net/";

const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

app.use(bodyParser.json()); // Parse incoming JSON data

app.get('/patient-record', async (req, res) => {
  try {
    const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db("HospitalMgDatabase");
    const collection = db.collection("PatientRecords");

    const patients = await collection.find().toArray(); // Fetch all patients

    res.status(200).json({ patients });
    client.close();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching patients' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
