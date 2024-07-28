import "./App.css";
// import BarChart from "./Components/BarChart";
import Cards from "./Components/Cards";

import Doctor from "./Components/Doctor/Doctor";
import DoctorRecord from "./Components/Doctor/DoctorRecord";
// import Navbar from "./Components/Navbar";
import NewEntryForm from "./Components/Admin/NewDoctorEntryForm";
import NewPharmacyEntry from "./Components/Admin/NewPharmacyEntry";
// import PatientRecordForm from "./Components/Doctor/NewPatientEntryForm";
// import Table from "./Components/Table";
import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pharmacy from "./Components/Pharmacy/Pharmacy";
import Distributor from "./Components/Distributor/Distributer";
import TabCard from "./Components/TabCard";
import Manufacturer from "./Components/Manufacturer/Manufacturer";
import Supplier from "./Components/Supplier/Supplier";
import SupplierNewEntry from "./Components/Admin/SupplierNewEntry";
import SupplierVInventory from "./Components/Supplier/SupplierVInventory";
import SupplierMDFStock from "./Components/Supplier/SupplierMDFStock";
import NewPatientEntryForm from "./Components/Admin/NewPatientEntryForm";
import PatientRecord from "./Components/Doctor/PatientRecord";
import Search from "./Components/Search";
import PharmacyInventory from "./Components/Pharmacy/PharmacyInventory";
import PharmacyCrossCheck from "./Components/Pharmacy/PharmacyCrossCheck";
import PharmacyDisStock from "./Components/Pharmacy/PharmacyDisStock";
import DInventory from "./Components/Distributor/DInventory";
import PHStock from "./Components/Distributor/PHStock";
import SStock from "./Components/Distributor/SStock";
import NewManufacturerEntry from "./Components/Admin/NewManufacturerEntry";
import ManufacturerSStock from "./Components/Manufacturer/ManufacturerSStock";
import MInventory from "./Components/Manufacturer/MInventory";
import VStock from "./Components/Manufacturer/VStock";
import Stockist from "./Components/Stockist/Stockist";
import StockistNewEntry from "./Components/Admin/StockistNewEntry";
import StockistInventory from "./Components/Stockist/StockistInventory";
import StockistDStock from "./Components/Stockist/StockistDStock";
import StockistMstock from "./Components/Stockist/StockistMstock";
import NewDistributerEntry from "./Components/Admin/NewDistributerEntry";

import Footer from "./Components/Footer";
import ButtonToggle from "./Components/ButtonToggle";
import Overlay from "./Components/Overlay";
// import { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Admin from "./Components/Admin/Admin";
import CardWithChart from "./Components/CardWithChart";

function App() {
  const [doctors, setDoctors] = useState([]);

  const [patients, setPatient] = useState([]);

  const handleSubmitPatient = (newPatient) => {
    setPatient(newPatient); // Update the patient state in the parent component
  };

  const handleSubmit = (newDoctors) => {
    setDoctors(newDoctors); // Update the doctors state in the parent component
  };

  const [active, setActive] = useState(false);
  const toggle = () => setActive(!active);



  // Test DATA

  const doctorData = [
    { value: 1048, name: 'Paracetamol' },
    { value: 735, name: 'Ibuprofen' },
    { value: 580, name: 'Aspirin' },
    { value: 484, name: 'Amoxicillin' },
    { value: 300, name: 'Ciprofloxacin' }
  ];

  const pharmacyData = [
    { value: 800, name: 'Metformin' },
    { value: 600, name: 'Omeprazole' },
    { value: 400, name: 'Levothyroxine' },
    { value: 300, name: 'Simvastatin' },
    { value: 200, name: 'Lisinopril' }
  ];

  const distributorData = [
    { value: 900, name: 'Atorvastatin' },
    { value: 700, name: 'Amlodipine' },
    { value: 500, name: 'Metoprolol' },
    { value: 300, name: 'Hydrochlorothiazide' },
    { value: 100, name: 'Losartan' }
  ];

  const manufacturerData = [
    { value: 1200, name: 'Albuterol' },
    { value: 950, name: 'Gabapentin' },
    { value: 700, name: 'Hydrocodone' },
    { value: 450, name: 'Fluticasone' },
    { value: 200, name: 'Furosemide' }
  ];

  const stockiestData = [
    { value: 1100, name: 'Pantoprazole' },
    { value: 850, name: 'Prednisone' },
    { value: 650, name: 'Tamsulosin' },
    { value: 400, name: 'Rosuvastatin' },
    { value: 250, name: 'Tramadol' }
  ];

  const supplierData = [
    { value: 1300, name: 'Montelukast' },
    { value: 1000, name: 'Meloxicam' },
    { value: 750, name: 'Allopurinol' },
    { value: 500, name: 'Clopidogrel' },
    { value: 250, name: 'Cephalexin' }
  ];
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />

                <Cards />
                <Footer />
                {/* <BarChart /> */}
              </>
            }
          />

          {/* ADMIN ROUTES LINKS START */}
          <Route
            path="/admin"
            element={
              <>
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />
                <Admin />
                <TabCard
                  title="ADMIN TAB"
                  desc="This section contains the registration forms"
                />
                <Footer />
              </>
            }
          />

          <Route
            path="/new-entry"
            element={
              <>
                {/* <Navbar /> */}
                {/* <Doctor /> */}
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />
                <Admin />
                <NewEntryForm onSubmit={handleSubmit} />
                <Footer />
              </>
            }
          />

          <Route
            path="/patient-entry"
            element={
              <>
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />
                <Admin />
                <NewPatientEntryForm onSubmit={handleSubmitPatient} />
                <Footer />
              </>
            }
          />

          <Route
            path="/new-pharmacy-entry"
            element={
              <>
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />
                <Admin />
                <NewPharmacyEntry />
                <Footer />
              </>
            }
          />

          <Route
            path="/new-entry-dist"
            element={
              <>
                {" "}
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />
                <Admin />
                <NewDistributerEntry />
                <Footer />
              </>
            }
          />

          <Route
            path="/new-manufacturer-entry"
            element={
              <>
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />
                <Admin />
                <NewManufacturerEntry />
                <Footer />
              </>
            }
          />

          <Route
            path="/new-stockist-entry"
            element={
              <>
                {" "}
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />
                <Admin />
                <StockistNewEntry />
                <Footer />
              </>
            }
          />

          <Route
            path="/new-supplier-entry"
            element={
              <>
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />
                <Admin />
                <SupplierNewEntry />
                <Footer />
              </>
            }
          />
          {/* ADMIN ROUTES LINKS END */}
          {/* DOCTOR ROUTES LINKS START */}
          <Route
            path="/doctor"
            element={
              <>
                {/* <Navbar /> */}
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />
                <Doctor />
                <CardWithChart title="Doctors" data={doctorData} />
                <Footer />
              </>
            }
          />
          {/*
           */}

          <Route
            path="/doctor-record"
            element={
              <>
                {/* <Navbar /> */}

                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />
                <Doctor />
                <Search />
                <DoctorRecord doctors={doctors} />
                <Footer />
              </>
            }
          />

          {/*  */}

          <Route
            path="/patient-record"
            element={
              <>
                {/* <Navbar /> */}
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />

                <Doctor />
                <Search />
                <PatientRecord patients={patients} />
                <Footer />
              </>
            }
          />

          {/* DOCTOR ROUTES LINKS END */}
          {/* PHARMACY ROUTES LINKS START */}

          <Route
            path="/pharmacy"
            element={
              <>
                {/* <Navbar /> */}
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />

                <Pharmacy />
                <TabCard
                  title="PHARMACY TAB"
                  desc="This section contains the forms to register and display the inventory items"
                />
                <Footer />
              </>
            }
          />

          {/*  */}

          <Route
            path="/ph-inventory"
            element={
              <>
                {/* <Navbar /> */}
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />

                <Pharmacy />
                <PharmacyInventory />
                <Footer />
              </>
            }
          />

          <Route
            path="/customer-request"
            element={
              <>
                {/* <Navbar /> */}
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />

                <Pharmacy />
                <PharmacyCrossCheck />
                <Footer />
              </>
            }
          />

          <Route
            path="/dis-stock"
            element={
              <>
                {/* <Navbar /> */}
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />

                <Pharmacy />
                <PharmacyDisStock />
                <Footer />
              </>
            }
          />
          {/* PHARMACY ROUTES LINKS END */}
          {/* DISTRIBUTOR ROUTES LINKS START */}

          <Route
            path="/distributor"
            element={
              <>
                {/* <Navbar /> */}
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />

                <Distributor />
                <TabCard
                  title="DISTRIBUTOR TAB"
                  desc="This section contains the forms to register and display the Distributors."
                />
                <Footer />
              </>
            }
          />

          <Route
            path="/d-inventory"
            element={
              <>
                {/* <Navbar /> */}
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />

                <Distributor />
                <DInventory />
                <Footer />
              </>
            }
          />
          {/*
           */}

          <Route
            path="/pharmacy-stock"
            element={
              <>
                {/* <Navbar /> */}
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />

                <Distributor />
                <PHStock />
                <Footer />
              </>
            }
          />

          <Route
            path="/s-stock"
            element={
              <>
                {/* <Navbar /> */}
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />

                <Distributor />
                <SStock />
                <Footer />
              </>
            }
          />
          {/* DISTRIBUTOR ROUTES LINKS END */}
          {/* MANUFACTURER ROUTES LINKS START */}

          <Route
            path="/manufacturer"
            element={
              <>
                {/* <Navbar /> */}
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />

                <Manufacturer />
                <TabCard
                  title="MANUFACTURER TAB"
                  desc="This section contains the forms to register and display the Manufacturer."
                />
                <Footer />
              </>
            }
          />

          {/*  */}

          <Route
            path="/m-inventory"
            element={
              <>
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />

                {/* <Navbar /> */}
                <Manufacturer />
                <MInventory />
                <Footer />
              </>
            }
          />

          <Route
            path="/ms-stock"
            element={
              <>
                {/* <Navbar /> */}
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />

                <Manufacturer />
                <ManufacturerSStock />
                <Footer />
              </>
            }
          />
          <Route
            path="/v-stock"
            element={
              <>
                {/* <Navbar /> */}
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />

                <Manufacturer />
                <VStock />
                <Footer />
              </>
            }
          />
          {/* MANUFACTURER ROUTES LINKS END */}
          {/* STOCKIST ROUTES LINKS START */}

          <Route
            path="/stockist"
            element={
              <>
                {/* <Navbar />
                 */}
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />

                <Stockist />
                <TabCard
                  title="STOCKIST TAB"
                  desc="This section contains the forms to register and display the Stockist."
                />
                <Footer />
              </>
            }
          />

          {/* */}

          <Route
            path="/sm-inventory"
            element={
              <>
                {/* <Navbar /> */} <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />
                <Stockist />
                <StockistInventory />
                <Footer />
              </>
            }
          />

          <Route
            path="/ss-stock"
            element={
              <>
                {/* <Navbar /> */}
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />

                <Stockist />
                <StockistDStock />
                <Footer />
              </>
            }
          />

          <Route
            path="/sm-stock"
            element={
              <>
                {/* <Navbar /> */} <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />
                <Stockist />
                <StockistMstock />
                <Footer />
              </>
            }
          />
          {/* STOCKIST ROUTES LINKS END */}
          {/* SUPPLIER ROUTES LINKS START */}

          <Route
            path="/supplier"
            element={
              <>
                {/* <Navbar /> */}
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />

                <Supplier />
                <TabCard
                  title="SUPPLIER TAB"
                  desc="This section contains the forms to register and display the Supplier."
                />
                <Footer />
              </>
            }
          />

          {/*  */}

          <Route
            path="/v-inventory"
            element={
              <>
                {/* <Navbar /> */}
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />

                <Supplier />
                <SupplierVInventory />
                <Footer />
              </>
            }
          />

          <Route
            path="/mdf-stock"
            element={
              <>
                {/* <Navbar /> */}
                <ButtonToggle onClick={toggle} />
                <Overlay
                  className={active ? "overlay active" : "overlay"}
                  onClick={toggle}
                />
                <Sidebar className={active ? "active" : null} />

                <Supplier />
                <SupplierMDFStock />
                <Footer />
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
