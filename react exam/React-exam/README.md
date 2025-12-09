# 🎓 Student Management System (SMS)

A full-featured React + Redux Student Management System that lets you register, log in, and manage student records easily and efficiently.

# ✨ Features
## 🔐 Authentication

📝 Sign Up – Register with email and password.

🔑 Sign In – Login to access your dashboard.

🚪 Logout – Securely log out.

💾 User Management – Users stored in localStorage.

## 📊 Dashboard

🎉 Welcome page with a clean interface.

🖱️ Quick access to View Students.

👤 Shows current logged-in user info.

## 🧑‍🎓 Student Management

➕ Add / Edit / Delete Students with a form.

📋 Student Details: ID, Name, Age, Class, Email, Phone, Address, Marks (Math, Science, English).

🔍 Filter & Search – Filter by class or search by name.

🏫 Student List – Responsive table with avatars.

## 🗂️ Redux State Management

🛠️ Authentication Slice – Handles registration, login, logout.

🛠️ Students Slice – Fetching, adding, updating, deleting student records.

🌐 Async API Calls – Fetch students from http://localhost:3000/students.

## 🛣️ Routing

/ → Landing Page

/signin → Sign In Page

/signup → Sign Up Page

/dash → Dashboard

/students → Student List

/student/:id → Add/Edit Student Details

## 📱 Responsive Design

Modern, clean UI for desktop and tablet.

## 🛠️ Technologies Used

React.js – Frontend library

Redux Toolkit – State management

React Router DOM – Routing

JavaScript (ES6+)

CSS / Flexbox – Styling

LocalStorage – Persist users and login sessions

JSON Server (optional) – For simulating student API

## 📂 Project Structure
src/

├── Components/

│   ├── Navbar/

│   ├── Dashboard/

│   ├── StudentList/

│   └── StudentDetails/

├── Pages/

│   ├── FirstPage/

│   ├── SignIn/

│   └── SignUp/

├── slices/

│   ├── authenticationSlice.js

│   └── studentSlice.js

├── store/

│   └── store.js

├── App.js

└── index.js



## 📸 Screenshots

🌅 Landing Page

🔐 Sign In / Sign Up Forms

🏠 Dashboard

🧑‍🎓 Student List with Filter & Search

✏️ Add/Edit Student Details Form

## 🚧 Future Improvements

📸 Upload profile pictures for students

🌐 Integrate with backend API for persistent storage

👥 Role-based access (Admin / Teacher)

📱 Mobile-friendly responsive design

📊 Charts & analytics for student performance



https://github.com/user-attachments/assets/58f72fda-b763-43ec-a3a9-385618e8194e


