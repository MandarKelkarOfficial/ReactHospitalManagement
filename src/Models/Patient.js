// models/Patient.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  ptid: String,
  email: String,
  name: String,
  address: String,
  city: String,
  state: String,
  postalCode: String,
  country: String,
  phoneNumber: String,
  age: Number,
  gender: String,
  bloodGroup: String,
  drugs: [String],
  dosages: [String],
},
{ collection: "PatientRecords", strict: false }
);

const Patients = mongoose.model('Patients', patientSchema, "PatientRecords");

module.exports = Patients;
