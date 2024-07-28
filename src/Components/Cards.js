// import React from "react";
// import CardWithChart from "./CardWithChart";

// export default function Cards() {
//   const doctorData = [
//     { value: 1048, name: 'Paracetamol' },
//     { value: 735, name: 'Ibuprofen' },
//     { value: 580, name: 'Aspirin' },
//     { value: 484, name: 'Amoxicillin' },
//     { value: 300, name: 'Ciprofloxacin' }
//   ];

//   const pharmacyData = [
//     { value: 800, name: 'Metformin' },
//     { value: 600, name: 'Omeprazole' },
//     { value: 400, name: 'Levothyroxine' },
//     { value: 300, name: 'Simvastatin' },
//     { value: 200, name: 'Lisinopril' }
//   ];

//   const distributorData = [
//     { value: 900, name: 'Atorvastatin' },
//     { value: 700, name: 'Amlodipine' },
//     { value: 500, name: 'Metoprolol' },
//     { value: 300, name: 'Hydrochlorothiazide' },
//     { value: 100, name: 'Losartan' }
//   ];

//   const manufacturerData = [
//     { value: 1200, name: 'Albuterol' },
//     { value: 950, name: 'Gabapentin' },
//     { value: 700, name: 'Hydrocodone' },
//     { value: 450, name: 'Fluticasone' },
//     { value: 200, name: 'Furosemide' }
//   ];

//   const stockiestData = [
//     { value: 1100, name: 'Pantoprazole' },
//     { value: 850, name: 'Prednisone' },
//     { value: 650, name: 'Tamsulosin' },
//     { value: 400, name: 'Rosuvastatin' },
//     { value: 250, name: 'Tramadol' }
//   ];

//   const supplierData = [
//     { value: 1300, name: 'Montelukast' },
//     { value: 1000, name: 'Meloxicam' },
//     { value: 750, name: 'Allopurinol' },
//     { value: 500, name: 'Clopidogrel' },
//     { value: 250, name: 'Cephalexin' }
//   ];

//   return (
//     <>
//       <div className="container ">
//         <div className="row gap-2 mt-3 d-flex justify-content-center align-items-center">
//           <div className="col mb-3">
//             <CardWithChart title="Doctors" data={doctorData} />
//           </div>

//           <div className="col mb-3">
//             <CardWithChart title="Pharmacy" data={pharmacyData} />
//           </div>

//           <div className="col mb-3">
//             <CardWithChart title="Distributor" data={distributorData} />
//           </div>
//         </div>
//       </div>

//       <div className="container ">
//         <div className="row gap-2 d-flex justify-content-center align-items-center">
//           <div className="col mb-3">
//             <CardWithChart title="Manufacturer" data={manufacturerData} />
//           </div>

//           <div className="col mb-3">
//             <CardWithChart title="Stockiest" data={stockiestData} />
//           </div>

//           <div className="col mb-3">
//             <CardWithChart title="Supplier" data={supplierData} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



import React from "react";
import CardWithChart from "./CardWithChart";

export default function Cards() {
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
      <div className="container ">
        <div className="row gap-2 mt-3 d-flex justify-content-center align-items-center">
          <div className="col mb-3">
            <CardWithChart title="Doctors" data={doctorData} />
          </div>
          <div className="col-md-4 mb-3">
            <CardWithChart title="Pharmacy" data={pharmacyData} />
          </div>
          <div className="col-md-4 mb-3">
            <CardWithChart title="Distributor" data={distributorData} />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row gap-2 d-flex justify-content-center align-items-center">
          <div className="col mb-3">
            <CardWithChart title="Manufacturer" data={manufacturerData} />
          </div>
          <div className="col-md-4 mb-3">
            <CardWithChart title="Stockiest" data={stockiestData} />
          </div>
          <div className="col-md-4 mb-3">
            <CardWithChart title="Supplier" data={supplierData} />
          </div>
        </div>
      </div>
    </>
  );
}
