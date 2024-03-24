import React from "react";

export default function PatientRecordForm() {
  return (
    <div className="container mt-4">
      <div className="heading">
        <h1 className="text-center mb-4"> PATIENT RECORD FORM</h1>
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
      <div className="row mt-3 w-full">
        <div className="col w-ful">
          <button className="btn btn-primary w-100">SUBMIT</button>
        </div>
      </div>
    </div>
  );
}
