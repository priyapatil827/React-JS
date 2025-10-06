import React, { useState } from "react";
import Data from "../../assets/data";
import "./Home.css";

export default function Home() {
    const [orderId, setOrderId] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [phone, setPhone] = useState("");
    const [product, setProduct] = useState("");
    const [payment, setPayment] = useState("");
    const [status, setStatus] = useState("");
    const [date, setDate] = useState("");

    const [filteredData, setFilteredData] = useState([...Data]);

    const handlefilter = () => {
        let tempdata = [...Data];
        if (orderId) {
            tempdata = tempdata.filter(item => item.orderId.toLowerCase().includes(orderId.toLowerCase()))
        }
        if (customerName) {
            tempdata = tempdata.filter(item => item.customerName.toLowerCase().includes(customerName.toLowerCase()))
        }
        if (phoneNumber) {
            tempdata = tempdata.filter(item => item.phoneNumber.toLowerCase().includes(phoneNumber.toLowerCase()))
        }
        if (product) {
            tempdata = tempdata.filter(item => item.product.toLowerCase().includes(product.toLowerCase()))
        }
        if (payment) {
            tempdata = tempdata.filter(item => item.payment.toLowerCase().includes(payment.toLowerCase()))
        }
        if (status) {
            tempdata = tempdata.filter(item => item.status.toLowerCase().includes(status.toLowerCase()))
        }
        if (date) {
            tempdata = tempdata.filter(item => item.date.toLowerCase().includes(date.toLowerCase()))
        }
        setFilteredData(tempdata);
    }


    // 🧹 Clear Button Logic
    const handleClear = () => {
        setOrderId("");
        setCustomerName("");
        setPhone("");
        setProduct("");
        setPayment("");
        setStatus("");
        setDate("");
        setFilteredData([...Data]);
    };

    return (
        <>
            <div className='ms-5 me-5'>
                <header className=" d-flex justify-content-between mt-2">
                    <h1 className="text-xl font-semibold text-gray-800">Orders</h1>
                    <div className="d-flex">
                        <span className="absolute py-3 right-0 block w-2 h-2 bg-red-500 rounded-full"><i class="ri-notification-3-line"></i></span>
                        <div className=" gap-3 ms-3">
                            <img
                                src="https://i.pravatar.cc/40?img=3"
                                alt="User"
                                className="w-9 h-9 py-2 rounded-circle"
                            />
                            <span className="text-sm font-medium text-gray-700 ms-2">
                                Garrick Ollivander
                            </span>
                        </div>
                    </div>
                </header>
                <div className="main mt-3 d-flex ">
                    <h6 className='text-primary '>All Orders(209)</h6>
                    <h6 className='ms-4 text-secondary'>New Orders(3)</h6>
                    <h6 className='ms-4 text-secondary'>Completed Orders(183)</h6>
                    <h6 className='ms-4 text-secondary'>Cancelled Orders(16)</h6>
                    <h6 className='ms-4 text-secondary'>Pending Orders(7)</h6>
                </div>
                <hr />
                <div className='s d-flex justify-content-between mt-3'>
                    <input type="text" placeholder='Search by order Id or Customer' className='w-75 border rounded border-white bg-light p-2 ' />
                    <div>
                        <button className='text-primary btn btn-outline-primary rounded border border-primary'>
                            <span><i class="ri-filter-3-line"></i></span>
                            <span>Filter</span>
                        </button>
                        <button className='ms-3 text-primary btn btn-outline-primary rounded border border-primary'>
                            <span ><i class="ri-upload-line"></i></span>
                            <span>Export</span>
                        </button>
                        <button className='ms-3 text-primary btn btn-primary text-white rounded'>
                            <span><i class="ri-add-line"></i></span>
                            <span>Add New</span>
                        </button>
                    </div>

                </div>
                <div className="filter-box mt-3">
                    <div className="form-group">
                        <label>Order ID</label>
                        <input type="number" placeholder="Order ID" value={orderId} onChange={((e) => setOrderId(e.target.value))} />
                    </div>

                    <div className="form-group">
                        <label>Customer</label>
                        <input type="text" placeholder="First and last name" onChange={((e) => setCustomerName(e.target.value))} />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="Phone Number" onChange={((e) => setPhone(e.target.value))} />
                    </div>

                    <div className="form-group">
                        <label>Product</label>
                        <input type="text" placeholder="Product" onChange={((e) => setProduct(e.target.value))} />
                    </div>

                    <div className="form-group">
                        <label>Payment</label>
                        <select value={payment} onChange={(e) => setPayment(e.target.value)}>
                            <option>Paid</option>
                            <option>Pending</option>
                            <option>Not Paid</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Status</label>
                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option>All</option>
                            <option>New</option>
                            <option>Completed</option>

                            <option>Cancelled</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Date</label>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>

                    <div className="actions">
                        <button className="btn btn-primary" onClick={handlefilter}>Search</button>
                        <button className="btn btn-outline-primary border border-primary" onClick={handleClear}>Clear Filters</button>
                    </div>
                </div>
                <div>
                    <table class="table table-dark table-striped table-hover mt-3 bg-light">
                        <thead>
                            <tr>
                                <th scope="col">Order Id</th>
                                <th scope="col">Date</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Product</th>
                                <th scope="col">Price</th>
                                <th scope="col">Payment</th>
                                <th scope="col">Status</th>
                                <th scope="col">phone number</th>
                            </tr>
                        </thead>
                        {
                            filteredData.map((d, index) => (
                                <tbody>
                                    <tr key={index}>
                                        <td >{d.orderId}</td>
                                        <td>{d.date}</td>
                                        <td>{d.customerName}</td>
                                        <td>{d.product}</td>
                                        <td>{d.price}</td>
                                        <td>{d.payment}</td>
                                        <td>{d.status}</td>
                                        <td>{d.phone}</td>
                                    </tr>


                                </tbody>

                            ))
                        }
                    </table>
                </div>
            </div>
        </>
    );
}
