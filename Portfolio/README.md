# 🌐 React Portfolio Website  

A modern and responsive **Portfolio Website** built with **React.js**.  
This project showcases personal details, GitHub repositories, and a contact form.  
It also integrates with the **GitHub API** to fetch real-time user information and repositories.  

---

## ✨ Features  

- 📖 **About Section** – Displays your bio and introduction dynamically from GitHub API.  
- 💻 **Projects Section** – Fetches and lists GitHub repositories with name, language, and live repo links.  
- 📩 **Contact Form** – Allows users to enter their details and ideas (stored via React refs).  
- 🧭 **Navigation Bar** – Smooth navigation to Home, About, Projects, Experience, and Contact.  
- ⚡ **Responsive Design** – Works seamlessly across devices.  

---

## 🛠️ Tech Stack  

- **Frontend**: React.js  
- **Styling**: CSS3 (custom styles)  
- **API**: GitHub REST API (via Axios)  
- **Version Control**: Git & GitHub  

---

## 📂 Folder Structure  


portfolio/

├── public/

│ └── index.html

├── src/

│ ├── Components/

│ │ ├── Navbar/

│ │ │ ├── Navbar.jsx

│ │ │ └── Navbar.css

│ │ ├── About/

│ │ │ ├── About.jsx

│ │ │ └── About.css

│ │ ├── Projects/

│ │ │ ├── Project.jsx

│ │ │ └── Project.css

│ │ ├── Contact/

│ │ │ ├── Contact.jsx

│ │ │ └── Contact.css

│ ├── Screens/

│ │ └── Home/

│ │ └── Home.jsx

│ ├── App.js

│ ├── App.css

│ └── index.js

└── package.json


---

## ⚙️ Installation & Setup  

1. Clone the repository  
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   
3. Install dependencies
   npm install

4. Run the development server
   http://localhost:3000

---

## 🔗 API Integration

This project uses the GitHub REST API to fetch dynamic data.

-User Info API:
https://api.github.com/users/<your-username>

-Repositories API:
https://api.github.com/users/<your-username>/repos

## 🚀 Deployment

This project can be deployed easily on:

Vercel

Netlify

GitHub Pages



https://github.com/user-attachments/assets/8f88c021-8195-4bbb-a179-260c4ca564f4










