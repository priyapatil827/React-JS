# 🏥 Appointment Booking Form (React)

A modern and responsive React.js application for booking medical appointments with doctors.
The app allows users to fill out their details in a form, validates required fields, and displays booked appointments in a stylish card-based list view.

## ✨ Features

📋 Form with validation – Users must enter required details before booking.

👩‍⚕️ Doctor selection – Choose a doctor from the dropdown list.

📅 Auto-filled date – Appointment date defaults to today’s date (editable).

🎨 Modern UI/UX – Glassmorphism-inspired design with gradients and hover effects.

📑 Dynamic List View – Booked appointments are displayed instantly as elegant cards.

📱 Responsive layout – Works across desktop and mobile screens.

## 🛠️ Tech Stack

React.js – Frontend framework

CSS3 – Custom styles with gradients, shadows, and responsive design

JavaScript (ES6+) – Form handling & state management with React Hooks

## 📂 Project Structure
src/
│── components/

│   ├── Form/

│   │   ├── Form.jsx

│   │   └── Form.css

│   ├── ListView/

│   │   ├── ListView.jsx

│   │   └── ListView.css

│── App.js

│── index.js

## 🚀 How It Works

User enters details (name, phone, gender, age, date, doctor, problem).

On form submission, input validation ensures all required fields are filled.

The appointment is added to the form list state and displayed as a card in the ListView.

Hover effects and smooth transitions enhance the UI experience.

## 📸 Screenshots (UI Preview)

https://github.com/user-attachments/assets/0104ccdf-20d3-46be-8cb2-ed31dba23e92

Form Section – Appointment booking form with gradient submit button.

List View – Glassmorphism-styled cards displaying booked appointments.

## ⚡ Future Improvements

🗑️ Add delete/edit appointment options.

💾 Persist appointments using localStorage or a backend (Node/Express + MongoDB).

🔔 Show success notifications after booking.
