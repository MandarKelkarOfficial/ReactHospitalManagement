import "./App.css";
// import BarChart from "./Components/BarChart";
import Cards from "./Components/Cards";
import Doctor from "./Components/Doctor/Doctor";
import DoctorRecord from "./Components/Doctor/DoctorRecord";
import Navbar from "./Components/Navbar";
import NewEntryForm from "./Components/Doctor/NewDoctorEntryForm";
import NewPharmacyEntry from "./Components/Pharmacy/NewPharmacyEntry";
// import PatientRecordForm from "./Components/Doctor/NewPatientEntryForm";
// import Table from "./Components/Table";
import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pharmacy from "./Components/Pharmacy/Pharmacy";
import Distributor from "./Components/Distributor/Distributer";
import TabCard from "./Components/TabCard";
import Manufacturer from "./Components/Manufacturer/Manufacturer";
import Supplier from "./Components/Supplier/Supplier";
import SupplierNewEntry from "./Components/Supplier/SupplierNewEntry";
import SupplierVInventory from "./Components/Supplier/SupplierVInventory";
import SupplierMDFStock from "./Components/Supplier/SupplierMDFStock";
import NewPatientEntryForm from "./Components/Doctor/NewPatientEntryForm";
import PatientRecord from "./Components/Doctor/PatientRecord";
import Search from "./Components/Search";
import PharmacyInventory from "./Components/Pharmacy/PharmacyInventory";
import PharmacyCrossCheck from "./Components/Pharmacy/PharmacyCrossCheck";
import PharmacyDisStock from "./Components/Pharmacy/PharmacyDisStock";
import DInventory from "./Components/Distributor/DInventory";
import PHStock from "./Components/Distributor/PHStock";
import SStock from "./Components/Distributor/SStock";
import NewManufacturerEntry from "./Components/Manufacturer/NewManufacturerEntry";
import ManufacturerSStock from "./Components/Manufacturer/ManufacturerSStock";
import MInventory from "./Components/Manufacturer/MInventory";
import VStock from "./Components/Manufacturer/VStock";
import Stockist from "./Components/Stockist/Stockist";
import StockistNewEntry from "./Components/Stockist/StockistNewEntry";
import StockistInventory from "./Components/Stockist/StockistInventory";
import StockistDStock from "./Components/Stockist/StockistDStock";
import StockistMstock from "./Components/Stockist/StockistMstock";
import NewDistributerEntry from "./Components/Distributor/NewDistributerEntry";

function App() {
  const [doctors, setDoctors] = useState([]);

  const [patients, setPatient] = useState([]);

  const handleSubmitPatient = (newPatient) => {
    setPatient(newPatient); // Update the patient state in the parent component
  };

  const handleSubmit = (newDoctors) => {
    setDoctors(newDoctors); // Update the doctors state in the parent component
  };
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Cards />
                {/* <BarChart /> */}
              </>
            }
          />

          {/* DOCTOR ROUTES LINKS START */}

          <Route
            path="/doctor"
            element={
              <>
                <Navbar />
                <Doctor />
                <TabCard
                  title="DOCTOR TAB"
                  desc="This section contains the forms to register and display the doctors and patients"
                />
              </>
            }
          />

          <Route
            path="/new-entry"
            element={
              <>
                <Navbar />
                <Doctor />
                <NewEntryForm onSubmit={handleSubmit} />
              </>
            }
          />

          <Route
            path="/doctor-record"
            element={
              <>
                <Navbar />
                <Doctor />
                <Search />
                <DoctorRecord doctors={doctors} />
              </>
            }
          />

          <Route
            path="/patient-entry"
            element={
              <>
                <Navbar />
                <Doctor />
                <NewPatientEntryForm onSubmit={handleSubmitPatient} />
              </>
            }
          />

          <Route
            path="/patient-record"
            element={
              <>
                <Navbar />
                <Doctor />
                <Search />
                <PatientRecord patients={patients} />
              </>
            }
          />

          {/* DOCTOR ROUTES LINKS END */}
          {/* PHARMACY ROUTES LINKS START */}

          <Route
            path="/pharmacy"
            element={
              <>
                <Navbar />
                <Pharmacy />
                <TabCard
                  title="PHARMACY TAB"
                  desc="This section contains the forms to register and display the inventory items"
                />
              </>
            }
          />

          <Route
            path="/new-pharmacy-entry"
            element={
              <>
                <Navbar />
                <Pharmacy />
                <NewPharmacyEntry />
              </>
            }
          />

          <Route
            path="/ph-inventory"
            element={
              <>
                <Navbar />
                <Pharmacy />
                <PharmacyInventory />
              </>
            }
          />

          <Route
            path="/customer-request"
            element={
              <>
                <Navbar />
                <Pharmacy />
                <PharmacyCrossCheck />
              </>
            }
          />

          <Route
            path="/dis-stock"
            element={
              <>
                <Navbar />
                <Pharmacy />
                <PharmacyDisStock />
              </>
            }
          />
          {/* PHARMACY ROUTES LINKS END */}
          {/* DISTRIBUTOR ROUTES LINKS START */}

          <Route
            path="/distributor"
            element={
              <>
                <Navbar />
                <Distributor />
                <TabCard
                  title="DISTRIBUTOR TAB"
                  desc="This section contains the forms to register and display the Distributors."
                />
              </>
            }
          />

          <Route
            path="/d-inventory"
            element={
              <>
                <Navbar />
                <Distributor />
                <DInventory />
              </>
            }
          />

          <Route
            path="/new-entry-dist"
            element={
              <>
                <Navbar />
                <Distributor />
                <NewDistributerEntry/>
              </>
            }
          />

          <Route
            path="/pharmacy-stock"
            element={
              <>
                <Navbar />
                <Distributor />
                <PHStock />
              </>
            }
          />

          <Route
            path="/s-stock"
            element={
              <>
                <Navbar />
                <Distributor />
                <SStock />
              </>
            }
          />
          {/* DISTRIBUTOR ROUTES LINKS END */}
          {/* MANUFACTURER ROUTES LINKS START */}

          <Route
            path="/manufacturer"
            element={
              <>
                <Navbar />
                <Manufacturer />
                <TabCard
                  title="MANUFACTURER TAB"
                  desc="This section contains the forms to register and display the Manufacturer."
                />
              </>
            }
          />

          <Route
            path="/new-manufacturer-entry"
            element={
              <>
                <Navbar />
                <Manufacturer />
                <NewManufacturerEntry />
              </>
            }
          />

          <Route
            path="/m-inventory"
            element={
              <>
                <Navbar />
                <Manufacturer />
                <MInventory />
              </>
            }
          />

          <Route
            path="/ms-stock"
            element={
              <>
                <Navbar />
                <Manufacturer />
                <ManufacturerSStock />
              </>
            }
          />
          <Route
            path="/v-stock"
            element={
              <>
                <Navbar />
                <Manufacturer />
                <VStock />
              </>
            }
          />
          {/* MANUFACTURER ROUTES LINKS END */}
          {/* STOCKIST ROUTES LINKS START */}

          <Route
            path="/stockist"
            element={
              <>
                <Navbar />
                <Stockist />
                <TabCard
                  title="STOCKIST TAB"
                  desc="This section contains the forms to register and display the Stockist."
                />
              </>
            }
          />

          <Route
            path="/new-stockist-entry"
            element={
              <>
                <Navbar />
                <Stockist />
                <StockistNewEntry />
              </>
            }
          />

          <Route
            path="/sm-inventory"
            element={
              <>
                <Navbar />
                <Stockist />
                <StockistInventory />
              </>
            }
          />

          <Route
            path="/ss-stock"
            element={
              <>
                <Navbar />
                <Stockist />
                <StockistDStock />
              </>
            }
          />

          <Route
            path="/sm-stock"
            element={
              <>
                <Navbar />
                <Stockist />
                <StockistMstock />
              </>
            }
          />
          {/* STOCKIST ROUTES LINKS END */}
          {/* SUPPLIER ROUTES LINKS START */}

          <Route
            path="/supplier"
            element={
              <>
                <Navbar />
                <Supplier />
                <TabCard
                  title="SUPPLIER TAB"
                  desc="This section contains the forms to register and display the Supplier."
                />
              </>
            }
          />

          <Route
            path="/new-supplier-entry"
            element={
              <>
                <Navbar />
                <Supplier />
                <SupplierNewEntry />
              </>
            }
          />

          <Route
            path="/v-inventory"
            element={
              <>
                <Navbar />
                <Supplier />
                <SupplierVInventory />
              </>
            }
          />

          <Route
            path="/mdf-stock"
            element={
              <>
                <Navbar />
                <Supplier />
                <SupplierMDFStock />
              </>
            }
          />
          {/* SUPPLIER ROUTES LINKS START */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
