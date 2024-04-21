// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // export default function PatientRecord() {
// //   const [patients, setPatients] = useState([]);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get('/api/patients');
// //         setPatients(response.data.patients); // Update state with fetched data
// //       } catch (error) {
// //         console.error(error);
// //         // Handle errors appropriately, e.g., display an error message
// //       }
// //     };

// //     fetchData();
// //   }, []); // Run the effect only once after component mounts

// //   return (
// //     <div className="container ">
// //       <div className="alert alert-danger mt-2">
// //         The records will be reset after refresh (consider persisting data)
// //       </div>
// //       <h2 className="text-center mt-2">Patient Records</h2>
// //       <table className="table mt-2">
// //         <thead>
// //           <tr>
// //             <th scope="col">Patient ID</th>
// //             <th scope="col">Email</th>
// //             <th scope="col">Name</th>
// //             <th scope="col">Address</th>
// //             <th scope="col">City</th>
// //             <th scope="col">State</th>
// //             <th scope="col">Postal Code</th>
// //             <th scope="col">Country</th>
// //             <th scope="col">Phone Number</th>
// //             <th scope="col">Qualification</th>
// //             <th scope="col">License Number</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {patients.map((patient, index) => (
// //             <tr key={index}>
// //               <td>{patient.id}</td>
// //               <td>{patient.email}</td>
// //               <td>{patient.name}</td>
// //               <td>{patient.address}</td>
// //               <td>{patient.city}</td>
// //               <td>{patient.state}</td>
// //               <td>{patient.postalCode}</td>
// //               <td>{patient.country}</td>
// //               <td>{patient.phoneNumber}</td>
// //               <td>{patient.qualification}</td>
// //               <td>{patient.licenseNumber}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function PatientRecord() {
//   const [patients, setPatients] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/patients');
//         setPatients(response.data); // Update state with fetched data
//       } catch (error) {
//         console.error(error);
//         // Handle errors appropriately, e.g., display an error message
//       }
//     };

//     fetchData();
//   }, []); // Run the effect only once after component mounts

//   return (
//     <div className="container">

//       <h2 className="text-center mt-2">Patient Records</h2>
//       <table className="table mt-2">
//         <thead>
//           <tr>
//             <th scope="col">Patient ID</th>
//             <th scope="col">Email</th>
//             <th scope="col">Name</th>
//             <th scope="col">Address</th>
//             <th scope="col">City</th>
//             <th scope="col">State</th>
//             <th scope="col">Postal Code</th>
//             <th scope="col">Country</th>
//             <th scope="col">Phone Number</th>
//             <th scope="col">Age</th>
//             <th scope="col">Gender</th>
//             <th scope="col">Blood Group</th>
//             <th scope="col">Drugs</th>
//             <th scope="col">Dosages</th>
//           </tr>
//         </thead>
//         <tbody>
//           {patients.map((patient, index) => (
//             <tr key={index}>
//               <td>{patient.id}</td>
//               <td>{patient.email}</td>
//               <td>{patient.name}</td>
//               <td>{patient.address}</td>
//               <td>{patient.city}</td>
//               <td>{patient.state}</td>
//               <td>{patient.postalCode}</td>
//               <td>{patient.country}</td>
//               <td>{patient.phoneNumber}</td>
//               <td>{patient.age}</td>
//               <td>{patient.gender}</td>
//               <td>{patient.bloodGroup}</td>
//               <td>{patient.drugs}</td>
//               <td>{patient.dosages}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PatientRecord() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/patients');
        setPatients(response.data); // Update state with fetched data
      } catch (error) {
        console.error(error);
        // Handle errors appropriately, e.g., display an error message
      }
    };

    fetchData();
  }, []); // Run the effect only once after component mounts

  return (
    <div className="container">
      <h2 className="text-center mt-2">Patient Records</h2>
      <table className="table  table-hover table-sm">
        <thead className='text-center'>
          <tr>
            <th scope="col">Patient ID</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Postal Code</th>
            <th scope="col">Country</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Blood Group</th>
            <th scope="col">Drugs</th>
            <th scope="col">Dosages</th>
          </tr>
        </thead>
        <tbody className='table-group-divider text-center'>
          {patients.map((patient, index) => (
            <tr key={index}>
              <td>{patient.ptid}</td>
              <td>{patient.email}</td>
              <td>{patient.name}</td>
              <td>{patient.address}</td>
              <td>{patient.city}</td>
              <td>{patient.state}</td>
              <td>{patient.postalCode}</td>
              <td>{patient.country}</td>
              <td>{patient.phoneNumber}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.bloodGroup}</td>
              <td>{patient.drugs}</td>
              <td>{patient.dosages}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
