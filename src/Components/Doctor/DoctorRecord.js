
// export default DoctorRecord;
import React, { useState, useEffect } from "react";
import axios from "axios";

function DoctorRecord() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/doctors");
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">

      <h2 className="text-center mt-2">Doctor Records</h2>
      <table className="table mt-2">
        <thead>
          <tr>
            <th scope="col">Doctor ID</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Postal Code</th>
            <th scope="col">Country</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Qualification</th>
            <th scope="col">License Number</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor._id}>
              <td>{doctor.id}</td>
              <td>{doctor.email}</td>
              <td>{doctor.name}</td>
              <td>{doctor.address}</td>
              <td>{doctor.city}</td>
              <td>{doctor.state}</td>
              <td>{doctor.postalCode}</td>
              <td>{doctor.country}</td>
              <td>{doctor.phoneNumber}</td>
              <td>{doctor.qualification}</td>
              <td>{doctor.licenseNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DoctorRecord;
