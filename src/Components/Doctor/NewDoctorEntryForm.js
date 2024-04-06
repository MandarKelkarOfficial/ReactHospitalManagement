import React, { useState } from "react";
import axios from "axios";


export default function NewEntryForm({ onSubmit }) {
  // const [doctors, setDoctors] = useState([]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const doctor = {
  //     id: formData.get("id"),
  //     email: formData.get("email"),
  //     name: formData.get("name"),
  //     address: formData.get("address"),
  //     city: formData.get("city"),
  //     state: formData.get("state"),
  //     postalCode: formData.get("postalCode"),
  //     country: formData.get("country"),
  //     phoneNumber: formData.get("phoneNumber"),
  //     qualification: formData.get("qualification"),
  //     licenseNumber: formData.get("licenseNumber"),
  //   };
  //   setDoctors([...doctors, doctor]);
  //   onSubmit([...doctors, doctor]);
  // };
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
