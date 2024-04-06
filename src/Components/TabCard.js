import React from "react";

export default function TabCard(props) {
  return (
    <div className="container mt-5">
      <div className="container d-flex justify-content-center align-items-center  ">
        <div
          className="card shadow-md"
          style={{
            width: "35rem",
            height: "10rem",
            backgroundColor: "#002244",
          }}
        >
          <div className="card-body ">
            <h5 className="card-title text-white ">{props.title} </h5>
            <h6 className="card-subtitle mb-2 mt-1 text-white ">{props.desc}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
