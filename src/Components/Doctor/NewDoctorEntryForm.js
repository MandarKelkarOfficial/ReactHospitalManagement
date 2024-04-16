import React, { useState } from "react";
import axios from "axios";

export default function NewEntryForm({ onSubmit }) {
  const [doctor, setDoctor] = useState({
    id: "",
    email: "",
    name: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    phoneNumber: "",
    qualification: "",
    licenseNumber: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/doctors",
        doctor
      );
      console.log(response.data);
      // Clear the form after successful submission
      setDoctor({
        id: document.getElementById("id").value,
        email: document.getElementById("email").value,
        name: document.getElementById("name").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        postalCode: document.getElementById("postalCode").value,
        country: document.getElementById("country").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        qualification: document.getElementById("qualification").value,
        licenseNumber: document.getElementById("licenseNumber").value,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };
  return (
    <div className="container mt-4">
      <div className="heading">
        <h1 className="text-center mb-4"> NEW DOCTOR ENTRY FORM</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        action="http://localhost:5000/api/doctors"
        method="POST"
      >
        <div className="row">
          <div className="col">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="id"
                name="id"
                placeholder="Doctor ID"
                value={doctor.id}
                onChange={handleChange}
              />
              <label htmlFor="id">Doctor ID</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                value={doctor.email}
                onChange={handleChange}
              />
              <label htmlFor="email">Doctor Email</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Name"
                value={doctor.name}
                onChange={handleChange}
              />
              <label htmlFor="name">Name</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                placeholder="Address"
                value={doctor.address}
                onChange={handleChange}
              />
              <label htmlFor="address">Address</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                placeholder="City"
                value={doctor.city}
                onChange={handleChange}
              />
              <label htmlFor="city">City</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="state"
                name="state"
                placeholder="State"
                value={doctor.state}
                onChange={handleChange}
              />
              <label htmlFor="state">State</label>
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
                name="postalCode"
                placeholder="Postal Code"
                value={doctor.postalCode}
                onChange={handleChange}
              />
              <label htmlFor="postalCode">Postal Code</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="country"
                name="country"
                placeholder="Country"
                value={doctor.country}
                onChange={handleChange}
              />
              <label htmlFor="country">Country</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                value={doctor.phoneNumber}
                onChange={handleChange}
              />
              <label htmlFor="phoneNumber">Phone Number</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="qualification"
                name="qualification"
                placeholder="Qualification"
                value={doctor.qualification}
                onChange={handleChange}
              />
              <label htmlFor="qualification">Qualification</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="licenseNumber"
                name="licenseNumber"
                placeholder="License Number"
                value={doctor.licenseNumber}
                onChange={handleChange}
              />
              <label htmlFor="licenseNumber">License Number</label>
            </div>
          </div>
        </div>
        <div className="row mt-3 w-full">
          <div className="col w-ful">
            <button type="submit" className="btn btn-primary w-100">
              SUBMIT
            </button>
          </div>
          <div className="col w-ful">
            <button className="btn btn-outline-primary w-100" type="reset">
              CLEAR
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
