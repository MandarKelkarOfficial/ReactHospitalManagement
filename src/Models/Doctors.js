
const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    id: String,
    email: String,
    name: String,
    address: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
    phoneNumber: String,
    qualification: String,
    licenseNumber: String,
  },
  { collection: "DoctorRecords", strict: false }
);

const Doctor = mongoose.model("Doctor", doctorSchema, "DoctorRecords");

module.exports = Doctor;
