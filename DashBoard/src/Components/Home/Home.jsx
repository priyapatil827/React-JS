import React, { useState } from 'react'
import { data } from "../../assets/data"
import './Home.css'
import { use } from 'react'

export default function Home() {
    const [orderId, setOrderId] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [product, setProduct] = useState("");
    const [payment, setPayment] = useState("");
    const [status, setStatus] = useState("");
    const [date, setDate] = useState("");
    // const [filteredData, setFilteredData] = useState([...data]);
    let filteredData = [...data];
    if (orderId) {
        filteredData = filteredData.filter(item => item.orderId.toLowerCase().includes(orderId.toLowerCase()))
    }
    if (customerName) {
        filteredData = filteredData.filter(item => item.customerName.toLowerCase().includes(customerName.toLowerCase()))
    }
    if (phoneNumber) {
        filteredData = filteredData.filter(item => item.phoneNumber.toLowerCase().includes(phoneNumber.toLowerCase()))
    }
    if (product) {
        filteredData = filteredData.filter(item => item.product.toLowerCase().includes(product.toLowerCase()))
    }
    if (payment) {
        filteredData = filteredData.filter(item => item.payment.toLowerCase().includes(payment.toLowerCase()))
    }
    if (status) {
        filteredData = filteredData.filter(item => item.status.toLowerCase().includes(status.toLowerCase()))
    }
    if (date) {
        filteredData = filteredData.filter(item => item.date.toLowerCase().includes(date.toLowerCase()))
    }

    // const handleSearch = () => {
    //     let tempdata = [...data];
    //     if (orderId) {
    //         tempdata = tempdata.filter(item => item.orderId.toLowerCase().includes(orderId.toLowerCase()))
    //     }
    //     if (customerName) {
    //         tempdata = tempdata.filter(item => item.customerName.toLowerCase().includes(customerName.toLowerCase()))
    //     }
    //     if (phoneNumber) {
    //         tempdata = tempdata.filter(item => item.phoneNumber.toLowerCase().includes(phoneNumber.toLowerCase()))
    //     }
    //     if (product) {
    //         tempdata = tempdata.filter(item => item.product.toLowerCase().includes(product.toLowerCase()))
    //     }
    //     if (payment) {
    //         tempdata = tempdata.filter(item => item.payment.toLowerCase().includes(payment.toLowerCase()))
    //     }
    //     if (status) {
    //         tempdata = tempdata.filter(item => item.status.toLowerCase().includes(status.toLowerCase()))
    //     }
    //     if (date) {
    //         tempdata = tempdata.filter(item => item.date.toLowerCase().includes(date.toLowerCase()))
    //     }
    //     setFilteredData(tempdata);
    // }




    const handleClear = () => {
        setOrderId("");
        setCustomerName("");
        setPhoneNumber("");
        setProduct("");
        setPayment("");
        setStatus("");
        setDate("");
        setFilteredData([...data]);
    };


    return (
        <>
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
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Payment"
                            value={payment}
                            onChange={(e) => setPayment(e.target.value)}
                        />
                    </div>
                    <div className="col-md-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        />
                    </div>
                    <div className="col-md-3">
                        <input
                            type="date"
                            className="form-control"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className="col-md-2 d-flex gap-2">
                        {/* Search button */}
                        <button className="btn btn-primary w-100">
                            Search
                        </button>
                        {/* Clear filters button */}
                        <button className="btn btn-secondary w-100" onClick={handleClear} >
                            Clear
                        </button>
                    </div>
                </div>
            </div>



            {/* Table */}
            <div className="table-responsive">
                <table className="table table-bordered table-hover align-middle">
                    <thead className="table-light">
                        <tr>
                            <th>Order ID</th>
                            <th>Date</th>
                            <th>Customer</th>
                            <th>Phone</th>
                            <th>Product</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((item) => (
                                <tr key={item.orderId}>
                                    <td>{item.orderId}</td>
                                    <td>{item.date}</td>
                                    <td>{item.customerName}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td>{item.product}</td>
                                    <td
                                        className={
                                            item.payment.toLowerCase() === "paid"
                                                ? "text-success fw-bold"
                                                : "text-danger fw-bold"
                                        }
                                    >
                                        {item.payment}
                                    </td>
                                    <td
                                        className={
                                            item.status.toLowerCase() === "completed"
                                                ? "text-success fw-bold"
                                                : item.status.toLowerCase() === "pending"
                                                    ? "text-warning fw-bold"
                                                    : item.status.toLowerCase() === "cancelled"
                                                        ? "text-danger fw-bold"
                                                        : "text-primary fw-bold"
                                        }
                                    >
                                        {item.status}
                                    </td>
                                </tr>
                            ))

                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center text-muted">
                                    No matching orders found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}
