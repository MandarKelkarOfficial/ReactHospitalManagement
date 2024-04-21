const mongoose = require("mongoose");

const pharmacyShema = new mongoose.Schema(
  {
    pid: String,
    name: String,
    address: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
    phoneNumber: String,
  },
  { collection: "PharmacyRecords", strict: false }
);

const Pharmacy =  mongoose.model("Pharmacy",pharmacyShema, "PharmacyRecord");

module.exports = Pharmacy;