# 🛒 Order Management Dashboard

This is a React.js application for managing and filtering orders. It allows you to search orders dynamically using multiple filters and view the results in a clean, responsive table.

## ✨ Features

🔍 Search Orders: Filter orders by multiple fields such as

Order ID

Customer Name

Phone Number

Product

Payment Status

Order Status

Date

🗑 Clear Filters: Reset all search fields with one click.

📊 Dynamic Table: View filtered orders in a responsive, styled table.

✅ Visual Status Indicators:

Paid payments appear in green 💚

Unpaid payments appear in red ❤️

Completed, Pending, and Cancelled statuses have unique colors for easy reading.


## ⚙️ How it Works

The app stores all orders in a data array.

Each filter input updates a React state.

Clicking the Search button filters the data based on input values.

Clicking Clear resets all inputs and shows all orders.

The table automatically updates to show matching orders.

## 💡 Notes

Make sure dates in your data array match the format of the date input (yyyy-mm-dd) for accurate filtering.

All searches are case-insensitive.

The app is fully responsive and works well on desktop and mobile devices.

## 🚀 Technologies

React.js

JavaScript (ES6+)

CSS / Bootstrap 5

## 🎨 UI Highlights

Responsive input filters

Clean, bordered, hoverable table

Color-coded payments & statuses for quick reading
