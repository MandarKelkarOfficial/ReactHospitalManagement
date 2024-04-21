import React, { useState } from "react";
import axios from "axios";

export default function NewPharmacyForm({ onSubmit }) {
  const [pharmacies, setPharmacies] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const pharmacy = {
      pid: formData.get("id"),
      name: formData.get("name"),
      address: formData.get("address"),
      city: formData.get("city"),
      state: formData.get("state"),
      postalCode: formData.get("postalCode"),
      country: formData.get("country"),
      phoneNumber: formData.get("phoneNumber"),
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/pharmacies",
        pharmacy
      );
      setPharmacies([...pharmacies, response.data]); // Update state with fetched data
      // if (typeof onSubmit === "function") {
      //   onSubmit([...pharmacies, pharmacy]);
      // } else {
      //   console.error("onSubmit is not a function");
      // }
      console.log(response.data);
    } catch (error) {
      console.error(error);
      // Handle errors appropriately, e.g., display an error message
    }
  };

  return (
    <div className="container mt-4">
      <div className="heading">
        <h1 className="text-center mb-4"> NEW PHARMACY ENTRY FORM</h1>
      </div>
      <form
        method="POST"
        action="http://localhost:5000/api/pharmacies"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="id"
                name="id"
                placeholder="Pharmacy ID"
              />
              <label htmlFor="id">Pharmacy ID</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Name"
              />
              <label htmlFor="name">Pharmacy Name</label>
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
        <div className="row mt-3 w-full">
          <div className="col w-ful">
            <button type="submit" className="btn btn-primary w-100">
              SUBMIT
            </button>
          </div>
          <div className="col w-ful">
            <button className="btn btn-outline-primary w-100">CLEAR</button>
          </div>
        </div>
      </form>
    </div>
  );
}
