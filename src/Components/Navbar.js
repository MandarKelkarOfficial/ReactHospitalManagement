import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            DASHBOARD
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  DOCTOR
                </a>
              </li> */}
              <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          DOCTOR          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/new-entry">New Entry</Link></li>
            <li><Link className="dropdown-item" to="/doctor-record">Doctor Record</Link></li>
            <li><Link className="dropdown-item" to="/patient-record">Patient Record</Link></li>
          </ul>
        </li>

              <li className="nav-item">
                <a className="nav-link active"  aria-current="page" href="/">
                  PHARMACY
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  DISTRIBUTOR
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  MANUFACTURER
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  STOCK LIST
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  SUPPLIER
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
