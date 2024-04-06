import React, { useState } from "react";

export default function NewPatientEntryForm({ onSubmit }) {
  const [patients, setPatient] = useState([]);
  const handleSubmitPatient = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const patient = {
      id: formData.get("id"),
      email: formData.get("email"),
      name: formData.get("name"),
      address: formData.get("address"),
      city: formData.get("city"),
      state: formData.get("state"),
      postalCode: formData.get("postalCode"),
      country: formData.get("country"),
      phoneNumber: formData.get("phoneNumber"),
      qualification: formData.get("qualification"),
      licenseNumber: formData.get("licenseNumber"),
    };
    setPatient([...patients, patient]);
    onSubmit([...patients, patient]);
  };

  // ------------------------------------------------------------------------------------------------------------------
  const [numDosageFields, setNumDosageFields] = useState(0);
  const [numDrugFields, setNumDrugFields] = useState(0);
  const [drug, setDrug] = useState("");

  const handleNumFieldsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setNumDosageFields(value);
  };

  const handleDrugChange = (e) => {
    setDrug(e.target.value);
  };

  const renderDosageFields = () => {
    const fields = [];
    for (let i = 1; i <= numDosageFields; i++) {
      fields.push(
        <div className="col" key={i}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id={`floatingDosage${i}`}
              placeholder={`Dosage ${i}`}
            />
            <label htmlFor={`floatingDosage${i}`}>{`Dosage ${i}`}</label>
          </div>
        </div>
      );
    }
    return fields;
  };

  const renderDrugFields = () => {
    const fields = [];
    for (let i = 1; i <= numDrugFields; i++) {
      fields.push(
        <div className="col" key={i}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id={`floatingDrug${i}`}
              placeholder={`Drug ${i}`}
            />
            <label htmlFor={`floatingDrug${i}`}>{`Drug ${i}`}</label>
          </div>
        </div>
      );
    }
    return fields;
  };

  return (
    <div className="container mt-4">
      <form method="post" onSubmit={handleSubmitPatient}>
        <div className="heading">
          <h1 className="text-center mb-4"> PATIENT ENTRY FORM</h1>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingPatientID"
                placeholder="Patient ID"
              />
              <label htmlFor="floatingPatientID">Patient ID</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingName"
                placeholder="Name"
              />
              <label htmlFor="floatingName">Name</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingEmail"
                placeholder="Email"
              />
              <label htmlFor="floatingEmail">Patient Email</label>
            </div>
          </div>
       
        </div>
        <div className="row">
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingAddress"
                placeholder="Address"
              />
              <label htmlFor="floatingAddress">Address</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingCity"
                placeholder="City"
              />
              <label htmlFor="floatingCity">City</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingState"
                placeholder="State"
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
                id="floatingPostalCode"
                placeholder="Postal Code"
              />
              <label htmlFor="floatingPostalCode">Postal Code</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingCountry"
                placeholder="Country"
              />
              <label htmlFor="floatingCountry">Country</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingPhoneNumber"
                placeholder="Phone Number"
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
                id="floatingAge"
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
                id="floatingGender"
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
                id="floatingBloodGroup"
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
        
        {/* <div className="row"></div> */}
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
