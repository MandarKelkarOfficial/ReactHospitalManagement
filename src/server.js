const express = require('express');
const mongoose = require('mongoose');
const Doctor = require('./Models/Doctors');
const Patient = require('./Models/Patient'); // Add the Patient model
const Pharmacy = require('./Models/Pharmacy'); // Add the
const cors = require('cors'); // Add the cors middleware

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors()); // Use the cors middleware

mongoose.connect('mongodb+srv://mandarkelkarofficial:dtZkw6KYYwOfoi0X@mk.yhxx8he.mongodb.net/?retryWrites=true&w=majority&appName=MK', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// mongoose.connect('mongodb+srv://mandarkelkarofficial:dtZkw6KYYwOfoi0X@mk.yhxx8he.mongodb.net/', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

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
// app.get('/api/patients/:id', async (req, res) => {
//   try {
//     const patient = await Patient.findById(req.params.id);
//     if (!patient) {
//       return res.status(404).json({ message: 'Patient not found' });
//     }
//     res.json(patient);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
app.get('/api/patients/:ptid', async (req, res) => {
  try {
    const patient = await Patient.findOne({ ptid: req.params.ptid });
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


// CRUD operations for pharmacies

// Create a new pharmacy
app.post('/api/pharmacies', async (req, res) => {
  try {
    const newPharmacy = new Pharmacy(req.body);
    await newPharmacy.save();
    res.status(201).json(newPharmacy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Read all pharmacies
app.get('/api/pharmacies', async (req, res) => {
  try {
    const pharmacies = await Pharmacy.find();
    res.json(pharmacies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read a single pharmacy by ID
// app.get('/api/pharmacies/:pid', async (req, res) => {
//   try {
//     const pharmacy = await Pharmacy.findById(req.params.pid);
//     if (!pharmacy) {
//       return res.status(404).json({ message: 'Pharmacy not found' });
//     }
//     res.json(pharmacy);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
app.get('/api/pharmacies/:pid', async (req, res) => {
  try {
    const pharmacy = await Pharmacy.findOne({ pid: req.params.pid });
    if (!pharmacy) {
      return res.status(404).json({ message: 'Pharmacy not found' });
    }
    res.json(pharmacy);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a pharmacy by ID
app.put('/api/pharmacies/:id', async (req, res) => {
  try {
    const pharmacy = await Pharmacy.findById(req.params.id);
    if (!pharmacy) {
      return res.status(404).json({ message: 'Pharmacy not found' });
    }
    pharmacy.set(req.body);
    await pharmacy.save();
    res.json(pharmacy);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a pharmacy by ID
app.delete('/api/pharmacies/:id', async (req, res) => {
  try {
    const pharmacy = await Pharmacy.findById(req.params.id);
    if (!pharmacy) {
      return res.status(404).json({ message: 'Pharmacy not found' });
    }
    await pharmacy.remove();
    res.json({ message: 'Pharmacy deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
