import React from "react";
import Table from "./Table";

export default function Cards() {
  return (
    <div>
      <div className="container d-flex justify-content-start align-items-center gap-5 mt-5">
        <div
          className="card shadow-sm"
          style={{
            width: "15rem",
            height: "9.5rem",
            backgroundColor: "#002244",
          }}
        >
          <div className="card-body">
            <h5 className="card-title text-white">Doctors</h5>
            <h6 className="card-subtitle mb-2 mt-1 text-white">Total : 4</h6>
          </div>
        </div>

        <div
          className="card shadow-sm"
          style={{
            width: "15rem",
            height: "9.5rem",
            backgroundColor: "#002244",
          }}
        >
          <div className="card-body">
            <h5 className="card-title text-white">Pharmacy</h5>
            <h6 className="card-subtitle mb-2 mt-1 text-white">Total : 2</h6>
          </div>
        </div>

        <div
          className="card shadow-sm"
          style={{
            width: "15rem",
            height: "9.5rem",
            backgroundColor: "#002244",
          }}
        >
          <div className="card-body">
            <h5 className="card-title text-white">Distributor</h5>
            <h6 className="card-subtitle mb-2 mt-1 text-white">Total : 4</h6>
          </div>
        </div>

        <div
          className="card shadow-md"
          style={{
            width: "15rem",
            height: "9.5rem",
            backgroundColor: "#002244",
          }}
        >
          <div className="card-body ">
            <h5 className="card-title text-white ">Manufacturer </h5>
            <h6 className="card-subtitle mb-2 mt-1 text-white ">Total : 2</h6>
          </div>
        </div>
        <div
          className="card shadow-md"
          style={{
            width: "15rem",
            height: "9.5rem",
            backgroundColor: "#002244",
          }}
        >
          <div className="card-body ">
            <h5 className="card-title text-white ">Card title</h5>
            <h6 className="card-subtitle mb-2 mt-1 text-white ">
              Card subtitle
            </h6>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-start align-items-baseline gap-5 mt-5 ">
        <div
          className="card shadow-md"
          style={{
            width: "15rem",
            height: "9.5rem",
            backgroundColor: "#002244",
          }}
        >
          <div className="card-body ">
            <h5 className="card-title text-white ">Stockiest </h5>
            <h6 className="card-subtitle mb-2 mt-1 text-white ">Total : 5</h6>
          </div>
        </div>
        <div
          className="card shadow-md"
          style={{
            width: "15rem",
            height: "9.5rem",
            backgroundColor: "#002244",
          }}
        >
          <div className="card-body ">
            <h5 className="card-title text-white ">Supplier </h5>
            <h6 className="card-subtitle mb-2 mt-1 text-white ">Total : 4</h6>
          </div>
        </div>

        <Table />
      </div>
    </div>
  );
}
