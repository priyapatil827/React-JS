
import React, { useState } from "react";
import { ordersData } from "../../assets/data";
import "./Home.css";

export default function Home() {
    const [orderId, setOrderId] = useState("");
    const [customer, setCustomer] = useState("");
    const [phone, setPhone] = useState("");
    const [product, setProduct] = useState("");
    const [payment, setPayment] = useState("");
    const [status, setStatus] = useState("All");
    const [date, setDate] = useState("");

    const [filteredData, setFilteredData] = useState([...ordersData]);

    // 🟢 Filter function
    // const handleFilter = () => {
        let data = [...ordersData];

        if (orderId) {
            const idNum = parseInt(orderId);
            data = data.filter((d) => {
                const orderNum = parseInt(d.id.replace("#", ""));
                return orderNum >= idNum;
            });
        }

        if (customer) {
            data = data.filter((d) =>
                d.customer.toLowerCase().includes(customer.toLowerCase())
            );
        }

        if (phone) {
            data = data.filter((d) => d.phone.includes(phone));
        }

        if (product) {
            data = data.filter((d) =>
                d.product.toLowerCase().includes(product.toLowerCase())
            );
        }

        if (payment) {
            data = data.filter(
                (d) => d.payment.toLowerCase() === payment.toLowerCase()
            );
        }

        if (status && status !== "All") {
            data = data.filter(
                (d) => d.status.toLowerCase() === status.toLowerCase()
            );
        }

        if (date) {
            data = data.filter((d) => d.date === date);
        }

        // setFilteredData(data);
    // };

    // 🟢 Clear filters
    const handleClear = () => {
        setOrderId("");
        setCustomer("");
        setPhone("");
        setProduct("");
        setPayment("");
        setStatus("All");
        setDate("");
        setFilteredData([...ordersData]);
    };

    // 🟢 Status color classes
    const getStatusClass = (status) => {
        switch (status) {
            case "New":
                return "status-new";
            case "Completed":
                return "status-completed";
            case "Pending":
                return "status-pending";
            case "Canceled":
                return "status-canceled";
            default:
                return "";
        }
    };

    return (
        <div className="container mt-4">
            {/* 🔍 Filter Section */}
            <div className="filters d-flex flex-wrap gap-2 mb-4">
                <input
                    type="text"
                    placeholder="Order ID"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Customer"
                    value={customer}
                    onChange={(e) => setCustomer(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                />
                <select value={payment} onChange={(e) => setPayment(e.target.value)}>
                    <option value="">All Payments</option>
                    <option value="Paid">Paid</option>
                    <option value="Pending">Pending</option>
                    <option value="Not paid">Not Paid</option>
                </select>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="All">All</option>
                    <option value="New">New</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                    <option value="Canceled">Canceled</option>
                </select>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <div className="actions d-flex gap-2">
                    <button className="btn btn-primary">
                        Search
                    </button>
                    <button className="btn btn-outline-primary" onClick={handleClear}>
                        Clear
                    </button>
                </div>
            </div>

            {/* 📋 Orders Table */}
            <table className="table table-bordered table-hover align-middle">
                <thead className="table-light">
                    <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Customer</th>
                        <th>Phone</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Payment</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.length > 0 ? (
                        filteredData.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.date}</td>
                                <td>{order.customer}</td>
                                <td>{order.phone}</td>
                                <td>{order.product}</td>
                                <td>₹{order.price}</td>
                                <td>{order.payment}</td>
                                <td>
                                    <span className={getStatusClass(order.status)}>
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" className="text-center text-danger">
                                No matching orders found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}