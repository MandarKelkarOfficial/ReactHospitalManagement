import React, { useState } from "react";
import axios from "axios";

export default function NewPatientEntryForm({ onSubmit }) {
  const [patients, setPatients] = useState([
    {
      ptid: "",
      email: "",
      name: "",
      address: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      phoneNumber: "",
      age: "",
      gender: "",
      bloodGroup: "",
      drugs: "",
      dosages: "",
    },
  ]);
  const [numDosageFields, setNumDosageFields] = useState(0);
  const [numDrugFields, setNumDrugFields] = useState(0);
  const [dosages, setDosages] = useState([]);
  const [drugs, setDrugs] = useState([]);



  const handleSubmitPatient = async (e) => {
    e.preventDefault();
    try {
      const newPatient = {
        ptid: document.getElementById("ptid").value,
        email: document.getElementById("email").value,
        name: document.getElementById("name").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        postalCode: document.getElementById("postalCode").value,
        country: document.getElementById("country").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value,
        bloodGroup: document.getElementById("bloodGroup").value,
        drugs: drugs,
        dosages: dosages,
      };
  
      const response = await axios.post(
        "http://localhost:5000/api/patients",
        newPatient
      );
      console.log(response.data);
      console.log("Data inserted successfully");
      // Clear form fields after successful submission
      setPatients({
        ptid: "",
        email: "",
        name: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
        phoneNumber: "",
        age: "",
        gender: "",
        bloodGroup: "",
        drugs: "",
        dosages: "",
      });
      setDrugs([]);
      setDosages([]);
    } catch (error) {
      console.error("Error adding patient:", error);
    }
  };
  

  const handleNumFieldsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumDosageFields(value);
  };

  const handleDrugChange = (e, index) => {
    const newDrugs = [...drugs];
    newDrugs[index] = e.target.value;
    setDrugs(newDrugs);
  };
  
  const renderDrugFields = () => {
    const fields = [];
    for (let i = 0; i < numDrugFields; i++) {
      fields.push(
        <div className="col" key={i}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id={`drugs-${i}`}
              placeholder={`Drug ${i + 1}`}
              value={drugs[i] || ""}
              onChange={(e) => handleDrugChange(e, i)}
            />
            <label htmlFor={`drugs-${i}`}>{`Drug ${i + 1}`}</label>
          </div>
        </div>
      );
    }
    return fields;
  };
  


  const handlePatientChange = (e) => {
    setPatients(e.target.value);
  };


  const handleDosageChange = (e, index) => {
    const newDosages = [...dosages];
    newDosages[index] = e.target.value;
    setDosages(newDosages);
  };
  
  const renderDosageFields = () => {
    const fields = [];
    for (let i = 0; i < numDosageFields; i++) {
      fields.push(
        <div className="col" key={i}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id={`dosages-${i}`}
              placeholder={`Dosage ${i + 1}`}
              value={dosages[i] || ""}
              onChange={(e) => handleDosageChange(e, i)}
            />
            <label htmlFor={`dosages-${i}`}>{`Dosage ${i + 1}`}</label>
          </div>
        </div>
      );
    }
    return fields;
  };
  


  return (
    <div className="container mt-4">
      <form
        action="http://localhost:5000/api/patients"
        method="post"
        onSubmit={handleSubmitPatient}
      >
        <div className="heading">
          <h1 className="text-center mb-4"> PATIENT ENTRY FORM</h1>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="ptid"
                placeholder="Patient ID"
                value={patients.ptid}
                onChange={handlePatientChange}
              />
              <label htmlFor="floatingPatientID">Patient ID</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                value={patients.email}
                onChange={handlePatientChange}
              />
              <label htmlFor="floatingEmail">Patient Email</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                value={patients.name}
                onChange={handlePatientChange}
                placeholder="Name"
              />
              <label htmlFor="floatingName">Name</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="address"
                value={patients.address}
                placeholder="Address"
              />
              <label htmlFor="floatingAddress">Address</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control mb-3"
                id="city"
                placeholder="City"
                value={patients.city}
                onChange={handlePatientChange}
              />
              <label htmlFor="floatingCity">City</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="state"
                placeholder="State"
                value={patients.state}
                onChange={handlePatientChange}
              />
              <label htmlFor="floatingState">State</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="postalCode"
                placeholder="Postal Code"
                value={patients.postalCode}
                onChange={handlePatientChange}
              />
              <label htmlFor="floatingPostalCode">Postal Code</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="country"
                placeholder="Country"
                value={patients.country}
                onChange={handlePatientChange}

              />
              <label htmlFor="floatingCountry">Country</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                placeholder="Phone Number"
                value={patients.phoneNumber}
                onChange={handlePatientChange}
              />
              <label htmlFor="floatingPhoneNumber">Phone Number</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="age"
                value={patients.age}
                onChange={handlePatientChange}
                placeholder="Age"
              />
              <label htmlFor="floatingAge">Age</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="gender"
                value={patients.gender}
                onChange={handlePatientChange}
                placeholder="Gender"
              />
              <label htmlFor="floatingGender">Gender</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="bloodGroup"
                value={patients.bloodGroup}
                onChange={handlePatientChange}
                placeholder="Blood Group"
              />
              <label htmlFor="floatingBloodGroup">Blood Group</label>
            </div>
          </div>
        </div>
        {/* Dosage Fields */}
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="numDosageFields" className="form-label">
                Enter number of dosage fields:
              </label>
              <input
                type="number"
                className="form-control"
                id="numDosageFields"
                value={numDosageFields}
                onChange={handleNumFieldsChange}
              />
            </div>
          </div>

          <div className="col">
            {/* Drug Fields */}
            <div className="mb-3">
              <label htmlFor="numDrugFields" className="form-label">
                Enter number of drug fields:
              </label>
              <input
                type="number"
                className="form-control"
                id="numDrugFields"
                value={numDrugFields}
                onChange={(e) => setNumDrugFields(parseInt(e.target.value, 10))}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">{renderDosageFields()}</div>
          <div className="col">{renderDrugFields()}</div>
        </div>

        <div className="row mt-3 mb-5 w-full">
          <div className="col w-ful">
            <button className="btn btn-primary w-100" type="submit">
              SUBMIT
            </button>
          </div>
          <div className="col w-ful">
            <button className="btn btn-outline-primary w-100" type="reset">
              CLEAR
            </button>
          </div>
          <div className="col w-ful">
            <button className="btn btn-outline-success w-100">
              LINK TO PHARMACY
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
