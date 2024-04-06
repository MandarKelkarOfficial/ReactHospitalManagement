import React, { useState } from "react";

export default function NewPharmacyForm({ onSubmit }) {
  const [pharmacies, setPharmacies] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const pharmacy = {
      id: formData.get("id"),
      name: formData.get("name"),
      address: formData.get("address"),
      city: formData.get("city"),
      state: formData.get("state"),
      postalCode: formData.get("postalCode"),
      country: formData.get("country"),
      phoneNumber: formData.get("phoneNumber"),
    };
    setPharmacies([...pharmacies, pharmacy]);
    onSubmit([...pharmacies, pharmacy]);
  };

  return (
    <div className="container mt-4">
      <div className="heading">
        <h1 className="text-center mb-4"> NEW PHARMACY ENTRY FORM</h1>
      </div>
      <form onSubmit={handleSubmit}>
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
