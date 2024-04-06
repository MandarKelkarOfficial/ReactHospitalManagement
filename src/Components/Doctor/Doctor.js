import React from "react";
import { Link } from "react-router-dom";

export default function Doctor() {
  return (
    <div className="container mt-4">
      <div className="tabs">
        <div className="row w-full">
          <div className="col">
            <Link to="/new-entry">
              <button type="button" className="btn btn-outline-primary w-100">
                NEW - ENTRY DOCTOR
              </button>
            </Link>
          </div>
   
          <div className="col">
            <Link to="/doctor-record">
              <button type="button" className="btn btn-outline-primary w-100">
                DOCTOR RECORD
              </button>
            </Link>
          </div>
          <div className="col">
            <Link to="/patient-entry">
              <button type="button" className="btn btn-outline-primary w-100">
                NEW - ENTRY PATIENT
              </button>
            </Link>
          </div>
          <div className="col">
            <Link to="/patient-record">
              <button type="button" className="btn btn-outline-primary w-100">
                PATIENT RECORD
              </button>
            </Link>
          </div>
        </div>
     
      </div>
    </div>
  );
}
