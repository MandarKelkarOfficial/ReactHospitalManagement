// // // const express = require('express');
// // // const bodyParser = require('body-parser');
// // // const { MongoClient } = require('mongodb');

// // // const app = express();
// // // const port = 5000;

// // // const uri = "mongodb+srv://mandarkelkarofficial:dtZkw6KYYwOfoi0X@mk.yhxx8he.mongodb.net/";
// // // const client = new MongoClient(uri);

// // // async function connect() {
// // //   try {
// // //     await client.connect();
// // //     console.log("Connected to MongoDB!");
// // //     return client.db("HospitalMgDatabase");
// // //   } catch (error) {
// // //     console.error(error);
// // //   }
// // // }

// // // app.use(bodyParser.json());

// // // app.post('/new-entry', async (req, res) => {
// // //   const db = await connect();
// // //   const collection = db.collection('DoctorRecords');
// // //   const { dname, email, address } = req.body;
// // //   try {
// // //     const result = await collection.insertOne({ dname, email, address });
// // //     res.status(201).json({ message: 'Doctor added successfully', doctorId: result.insertedId });
// // //   } catch (error) {
// // //     console.error(error);
// // //     res.status(500).json({ message: 'Failed to add doctor' });
// // //   }
// // // });

// // // app.listen(port, () => {
// // //   console.log(`Server is running on port ${port}`);
// // // });
// // const { MongoClient } = require('mongodb');
// // const express = require('express');
// // const bodyParser = require('body-parser');

// // const app = express();
// // const port = 5000;

// // const uri = "mongodb+srv://mandarkelkarofficial:dtZkw6KYYwOfoi0X@mk.yhxx8he.mongodb.net/";
// // const client = new MongoClient(uri);

// // async function connect() {
// //   try {
// //     await client.connect();
// //     console.log("Connected to MongoDB!");
// //     return client.db("HospitalMgDatabase");
// //   } catch (error) {
// //     console.error(error);
// //   }
// // }

// // async function createAttributesInCollection() {
// //   const db = await connect();
// //   const collection = db.collection('DoctorRecords');
// //   try {
// //     await collection.updateMany({}, { $set: { dname: "", email: "", address: "", city: "", state: "", postalCode: "", country: "", phoneNumber: "", qualification: "", licenseNumber: "" } });
// //     console.log("Attributes added to DoctorRecords collection");
// //   } catch (error) {
// //     console.error(error);
// //   }
// // }

// // // Create attributes in DoctorRecords collection
// // createAttributesInCollection();

// // app.use(bodyParser.json());

// // // Define your API routes below

// // app.listen(port, () => {
// //   console.log(`Server is running on port ${port}`);
// // });

// // server.js
// // const express = require('express');
// // const app = express();
// // const mongoose = require('mongoose');
// // const Doctor = require('./Models/Doctors');

// // app.use(express.json());

// // mongoose.connect('mongodb+srv://mandarkelkarofficial:dtZkw6KYYwOfoi0X@mk.yhxx8he.mongodb.net/', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true
// // });

// // const db = mongoose.connection;

// // db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// // app.post('/api/doctors', async (req, res) => {
// //   try {
// //     const newDoctor = new Doctor(req.body);
// //     await newDoctor.save();
// //     res.status(201).json(newDoctor);
// //   } catch (error) {
// //     res.status(400).json({ message: error.message });
// //   }
// // });

// // const PORT = 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });

// const Doctor = require('./Models/Doctors');

// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const cors = require('cors'); // Add the cors middleware

// app.use(express.json());
// app.use(cors()); // Use the cors middleware

// mongoose.connect('mongodb+srv://mandarkelkarofficial:dtZkw6KYYwOfoi0X@mk.yhxx8he.mongodb.net/', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// app.post('/api/doctors', async (req, res) => {
//   try {
//     const newDoctor = new Doctor(req.body);
//     await newDoctor.save();
//     res.status(201).json(newDoctor);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const mongoose = require('mongoose');
const Doctor = require('./Models/Doctors');
const Patient = require('./Models/Patient'); // Add the Patient model
const cors = require('cors'); // Add the cors middleware

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors()); // Use the cors middleware

mongoose.connect('mongodb+srv://mandarkelkarofficial:dtZkw6KYYwOfoi0X@mk.yhxx8he.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.post('/api/doctors', async (req, res) => {
  try {
    const newDoctor = new Doctor(req.body);
    await newDoctor.save();
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to fetch all doctors
app.get('/api/doctors', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API endpoint for creating a new patient
app.post('/api/patients', async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// API endpoint for retrieving all patients
app.get('/api/patients', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API endpoint for retrieving a single patient by ID
app.get('/api/patients/:id', async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    res.json(patient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// API endpoint for updating a patient by ID
app.put('/api/patients/:id', async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    patient.set(req.body);
    await patient.save();
    res.json(patient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// API endpoint for deleting a patient by ID
app.delete('/api/patients/:id', async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    await patient.remove();
    res.json({ message: 'Patient deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
