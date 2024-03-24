import React from "react";

export default function Table() {
  return (
    <div className="container w-75">
      <table className="table table-hover mt-4 shadow-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Medicine Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Expiry Date</th>
            <th scope="col">Manufacturer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Paracetamol</td>
            <td>100</td>
            <td>2024-06-30</td>
            <td>ABC Pharma</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Aspirin</td>
            <td>50</td>
            <td>2023-12-31</td>
            <td>XYZ Pharmaceuticals</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Amoxicillin</td>
            <td>75</td>
            <td>2025-03-15</td>
            <td>DEF Drugs</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Ibuprofen</td>
            <td>30</td>
            <td>2023-09-30</td>
            <td>GHI Pharma</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Ciprofloxacin</td>
            <td>25</td>
            <td>2024-11-30</td>
            <td>JKL Pharmaceuticals</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
