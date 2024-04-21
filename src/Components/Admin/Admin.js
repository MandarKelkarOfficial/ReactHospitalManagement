import React from "react";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div className="container mt-4">
      <div className="tabs">
        <div className="row w-full">
          <div className="col">
            <Link to="/new-entry">
              <button type="button" className="btn btn-outline-primary w-100">
                NEW ENTRY - DOCTOR
              </button>
            </Link>
          </div>

          <div className="col">
            <Link to="/patient-entry">
              <button type="button" className="btn btn-outline-primary w-100">
                NEW ENTRY - PATIENT
              </button>
            </Link>
          </div>

          <div className="col">
            <Link to="/new-entry-dist">
              <button type="button" className="btn btn-outline-primary w-100">
                NEW ENTRY - DISTRIBUTOR
              </button>
            </Link>
          </div>

          <div className="col">
            <Link to="/new-pharmacy-entry">
              <button type="button" className="btn btn-outline-primary w-100">
                NEW ENTRY - PHARMACY
              </button>
            </Link>
          </div>
          <div className="col">
            <Link to="/new-manufacturer-entry">
              <button type="button" className="btn btn-outline-primary w-100">
                NEW ENTRY - MANUFACTURER
              </button>
            </Link>
          </div>

          <div className="col">
            <Link to="/new-stockist-entry">
              <button type="button" className="btn btn-outline-primary w-100">
                NEW ENTRY - STOKIST
              </button>
            </Link>
          </div>

          <div className="col">
            <Link to="/new-supplier-entry">
              <button type="button" className="btn btn-outline-primary w-100">
                NEW ENTRY- SUPPLIER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
