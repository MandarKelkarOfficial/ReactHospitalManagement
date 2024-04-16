# Patient Management System

## Overview

This project is a Patient Management System developed using React.js. It allows doctors to manage patient records, including basic information such as name, email, address, and medical history.

## Features

- Add new patients with detailed information.
- Update existing patient records.
- View a list of all patients with their details.
- Delete patient records.

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`

## Getting Started

1. Start the development server: `npm start`
2. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Technologies Used

- React.js
- Axios
- MongoDB
- Node.js
- Express.js

## Folder Structure

```
patient-management-system/
├── public/
├── src/
│   ├── Components/
│   │   ├── Doctor/
│   │   │   ├── NewPatientEntryForm.js
│   │   │   └── PatientRecord.js
│   │   └── Patient/
│   │       ├── PatientList.js
│   │       └── PatientProfile.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## How to Use

1. Open the app in your browser.
2. Use the navigation menu to add new patients, view existing records, update patient information, or delete records.
3. Fill out the patient entry form with relevant details.
4. Click the "Submit" button to save the patient record.
5. Use the search bar to find specific patients by name or ID.
6. Click on a patient's name to view their detailed profile.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/my-feature`).
3. Commit your changes (`git commit -am 'Add my feature'`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.