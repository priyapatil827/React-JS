import React, { useState } from "react";
import { data } from "../../assets/data";
import "./Home.css";

export default function Home() {
    const [orderId, setOrderId] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [product, setProduct] = useState("");
    const [payment, setPayment] = useState("");
    const [status, setStatus] = useState("");
    const [date, setDate] = useState("");
    const [filteredData, setFilteredData] = useState([...data]);

    const handleSearch = () => {
        let tempdata = [...data];

        if (orderId.trim() !== "") {
            tempdata = tempdata.filter(item =>
                item.orderId.toLowerCase().includes(orderId.toLowerCase())
            );
        }

        if (customerName.trim() !== "") {
            tempdata = tempdata.filter(item =>
                item.customerName.toLowerCase().includes(customerName.toLowerCase())
            );
        }

        if (phoneNumber.trim() !== "") {
            tempdata = tempdata.filter(item =>
                item.phoneNumber.toLowerCase().includes(phoneNumber.toLowerCase())
            );
        }

        if (product.trim() !== "") {
            tempdata = tempdata.filter(item =>
                item.product.toLowerCase().includes(product.toLowerCase())
            );
        }

        if (payment.trim() !== "") {
            // Use includes instead of exact match if you want partial match
            tempdata = tempdata.filter(item =>
                item.payment.toLowerCase().includes(payment.toLowerCase())
            );
        }

        if (status.trim() !== "") {
            // Use includes for partial match
            tempdata = tempdata.filter(item =>
                item.status.toLowerCase().includes(status.toLowerCase())
            );
        }

        if (date.trim() !== "") {
            tempdata = tempdata.filter(item =>
                item.date.includes(date) // date input returns yyyy-mm-dd format
            );
        }

        setFilteredData(tempdata);
    };


    return (
        <div className="container mt-4">
            {/* Filters */}
            <div className="row g-3 mb-4">
                <div className="col-md-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Order ID"
                        value={orderId}
                        onChange={(e) => setOrderId(e.target.value)}
                    />
                </div>
                <div className="col-md-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Customer Name"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                    />
                </div>
                <div className="col-md-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="col-md-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Product"
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                    />
                </div>
                <div className="col-md-2">
                    <select
                        className="form-select"
                        value={payment}
                        onChange={(e) => setPayment(e.target.value)}
                    >
                        <option value="">Select Payment</option>
                        <option value="Paid">Paid</option>
                        <option value="Pending">Pending</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <select
                        className="form-select"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="">Select Status</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Processing">Processing</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <input
                        type="date"
                        className="form-control"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="col-md-2 d-grid">
                    <button className="btn btn-primary" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>

            {/* Results Table */}
            {filteredData.length > 0 ? (
                <table className="table table-bordered">
                    <thead className="table-light">
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Phone</th>
                            <th>Product</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.orderId}</td>
                                <td>{item.customerName}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{item.product}</td>
                                <td>{item.payment}</td>
                                <td>{item.status}</td>
                                <td>{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center mt-4 fw-bold text-danger">
                    ❌ No matching orders found
                </p>
            )}
        </div>
    );
}
