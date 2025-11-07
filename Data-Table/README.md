# 📦 Orders Management Dashboard

This is a **React-based Orders Management Dashboard** that allows users to view, filter, and manage customer orders.  
It provides **search and filtering options** for various fields such as **Order ID, Customer Name, Phone, Product, Payment Status, Order Status, and Date**.

---

## 🚀 Features

### 📋 View Orders  
Displays all customer orders in a clean, responsive table layout.

### 🔍 Filter Orders  
Filter and search by:
- **Order ID**
- **Customer Name**
- **Phone Number**
- **Product**
- **Payment** — Paid, Pending, or Not Paid
- **Status** — New, Completed, Cancelled, etc.
- **Date**

### 🧹 Clear Filters  
Reset all applied filters and show the complete dataset again.

### 🎨 Responsive UI  
Built with **Bootstrap 5** and **custom CSS (Home.css)** for a modern dashboard appearance.

### 👤 User Profile & Header  
Displays the logged-in user’s avatar and a notification icon for better dashboard realism.

### ➕ Action Buttons  
- **Filter** – Trigger filter panel  
- **Export** – Placeholder for future CSV/Excel export  
- **Add New Order** – Placeholder for adding new orders  

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| ⚛️ **React.js** | Frontend framework |
| 💅 **Bootstrap 5** | UI styling & layout |
| 🎨 **Custom CSS (Home.css)** | Dashboard customization |
| 🗂️ **Local JSON (db.js)** | Static dataset for demo orders |

---

## 📂 Project Structure
src/

├── assets/

│ └── data.js # Orders dataset (JSON-like format)

│

├── components/

│ └── Home.js # Main dashboard component

│

├── styles/

│ └── Home.css # Custom styling for layout

│

├── App.js

└── index.js

---

## ⚙️ How It Works

1. Orders are loaded from the **db.js** file into React state.  
2. Filters are applied through controlled input fields (Order ID, Customer, etc.).  
3. Clicking **“Search”** updates the displayed data based on filters.  
4. **“Clear Filters”** resets everything and reloads all orders.  
5. Filtered results are displayed instantly in the responsive Bootstrap table.

---

## 📸 UI Overview

- **Header Section:** Includes user avatar and notification icon  
- **Order Tabs:** All, New, Completed, Cancelled, Pending orders  
- **Filter Box:** Search by multiple fields  
- **Table View:** Displays all order details with clean row styling  

---

## 🚀 Future Improvements

✅ Add **pagination** for large datasets  
✅ Enable **CSV/Excel export** functionality  
✅ Add an **“Add New Order”** form with field validation  
✅ Integrate with a **backend API** for live order management  

---

### 🧑‍💻 Author
Developed by **Priya Patil** — Frontend Developer (React.js)

---


https://github.com/user-attachments/assets/159a04f8-a59e-479d-bd33-dc393c8d7827



