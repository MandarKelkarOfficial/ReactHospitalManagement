import "./App.css";
import Cards from "./Components/Cards";
import DoctorRecord from "./Components/DoctorRecord";
import Navbar from "./Components/Navbar";
import NewEntryForm from "./Components/NewEntryForm";
import PatientRecordForm from "./Components/PatientRecordForm";
// import Sidebar from './Components/Sidebar';
import Table from "./Components/Table";
import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [doctors, setDoctors] = useState([]);

  const handleSubmit = (newDoctors) => {
    setDoctors(newDoctors); // Update the doctors state in the parent component
  };
  return (
    <>
      {/* <Navbar /> */}
      {/* <Sidebar/> */}
      {/* <Cards/>
<Table/> */}
      {/* <NewEntryForm /> */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Cards />
                <Table />
              </>
            }
          />

          <Route
            path="/new-entry"
            element={
              <>
                <Navbar />
                <NewEntryForm onSubmit={handleSubmit}/>
              </>
            }
          />

          <Route
            path="/doctor-record"
            element={
              <>
                <Navbar />
                <DoctorRecord doctors={doctors} />
              </>
            }
          />

          <Route
            path="/patient-record"
            element={
              <>
                <Navbar />
                <PatientRecordForm />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
