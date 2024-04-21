import React, { useState } from "react";
import axios from "axios";

export default function PharmacyCrossCheck() {
  const [pharmacy, setPharmacy] = useState(null);
  const [pharmacySearchId, setPharmacySearchId] = useState("");
  const [patient, setPatient] = useState(null);
  const [patientSearchId, setPatientSearchId] = useState("");
  const [error, setError] = useState("");

  const handlePharmacySearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:5000/api/pharmacies/${pharmacySearchId}`
      );
      setPharmacy(response.data);
      setError("");
    } catch (error) {
      setPharmacy(null);
      setError("Pharmacy not found");
    }
  };

  const handlePatientSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:5000/api/patients/${patientSearchId}`
      );
      setPatient(response.data);
      setError("");
    } catch (error) {
      setPatient(null);
      setError("Patient not found");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h2 className="text-center mt-3 mb-2">Search Pharmacy By ID</h2>
          <form onSubmit={handlePharmacySearch}>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Pharmacy ID"
                    value={pharmacySearchId}
                    onChange={(e) => setPharmacySearchId(e.target.value)}
                  />
                  <button className="btn btn-primary" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col">
          <h2 className="text-center mt-3 mb-2">Search Patient By ID</h2>
          <form onSubmit={handlePatientSearch}>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Patient ID"
                    value={patientSearchId}
                    onChange={(e) => setPatientSearchId(e.target.value)}
                  />
                  <button className="btn btn-primary" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {error && <div className="alert alert-danger text-center">{error}</div>}

      {pharmacy && (
        <div className="mt-2">
          <h4 className="text-center mt-3 mb-2">Pharmacy Info</h4>
          <div className="container mt-5">
            <div className="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
              <div className="card-body">
                <h4 className="card-title text-center">
                  Pharmacy ID: {pharmacy.pid}
                </h4>
                <div className="row mt-2">
                  <div className="col">
                    <h6 className="card-text">Name: {pharmacy.name}</h6>{" "}
                  </div>
                  <div className="col">
                    <h6 className="card-text">Address: {pharmacy.address}</h6>
                  </div>
                  <div className="col">
                    <h6 className="card-text">City: {pharmacy.city}</h6>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <h6 className="card-text">State: {pharmacy.state}</h6>
                  </div>
                  <div className="col">
                    <h6 className="card-text">
                      Postal Code: {pharmacy.postalCode}
                    </h6>
                  </div>
                  <div className="col">
                    <h6 className="card-text">Country: {pharmacy.country}</h6>
                  </div>
                </div>
                <h6 className="card-text mt-2">
                  Phone Number: {pharmacy.phoneNumber}
                </h6>
              </div>
            </div>
          </div>
        </div>
      )}
      {patient && (
        <div className="mt-2">
          <h4 className="text-center mt-3 mb-2">Patient Info</h4>
          <div className="container mt-5">
            <div className="card shadow-sm p-3 mb-5 bg-body-tertiary rounded">
              <div className="card-body">
                <h5 className="card-title text-center">
                  Patient ID: {patient.ptid}
                </h5>
                <div className="row mt-2">
                  <div className="col">
                    <h6 className="card-text">Name: {patient.name}</h6>{" "}
                  </div>
                  <div className="col">
                    <h6 className="card-text">Address: {patient.address}</h6>
                  </div>
                  <div className="col">
                    <h6 className="card-text">City: {patient.city}</h6>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col">
                    <h6 className="card-text">State: {patient.state}</h6>
                  </div>
                  <div className="col">
                    <h6 className="card-text">
                      Postal Code: {patient.postalCode}
                    </h6>
                  </div>
                  <div className="col">
                    <h6 className="card-text">Country: {patient.country}</h6>
                  </div>
                </div>
                <h6 className="card-text mt-2">
                  Phone Number: {patient.phoneNumber}
                </h6>
                <div className="row mt-2">
                  <div className="col">
                    <h6 className="card-text">Age: {patient.age}</h6>
                  </div>
                  <div className="col">
                    <h6 className="card-text">Gender: {patient.gender}</h6>
                  </div>
                  <div className="col">
                    <h6 className="card-text">
                      Blood Group: {patient.bloodGroup}
                    </h6>
                  </div>
                </div>
                <div className="row mt-2">
                  <hr />
                  <h5 className="text-center">Prescription</h5>
                  <div className="col">
                    <h6 className="card-text text-center">
                      Drugs: 
                    </h6>
                    <p>{patient.drugs.join(", ")}</p>
                  </div>
                  <div className="col">
                    <h6 className="card-text text-center">
                      Dosages: 
                    </h6>
                    <p>{patient.dosages.join(", ")}</p>
                  </div>
                </div>
                <hr />

                <div className="row mt-2 w-full">
                  <div className="col"><button type="submit" className="btn btn-outline-success w-100">SUBMIT</button></div>
                  <div className="col"><button type="reset" className="btn btn-outline-primary w-100">CANCEL</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
