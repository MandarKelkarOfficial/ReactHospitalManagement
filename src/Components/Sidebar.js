import React from "react";

export default function Sidebar() {
  return (
    <div className="bg-primary vh-100" style={{ width: "250px" }}>
      <div className="d-flex justify-content-center align-items-center" style={{ height: "60px" }}>
        <a className="text-light navbar-brand" href="/">
          DASHBOARD
        </a>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active text-light" href="/">
            DOCTOR
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/">
            PHARMACY
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/">
            DISTRIBUTOR
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/">
            MANUFACTURER
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/">
            STOCK LIST
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/">
            SUPPLIER
          </a>
        </li>
      </ul>
    </div>
  );
}
