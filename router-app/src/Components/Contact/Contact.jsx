import React from "react";
import './Contact.css';

export default function Contact() {
    return (
        <section className="py-5 bg-light" id="contact">
            <div className="container">
                <h2 className="text-center mb-5">Contact Us</h2>

                <div className="row">
                    {/* Contact Form */}
                    <div className="col-md-6 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title mb-4">Get in Touch</h5>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-success">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-6 mb-4">
                        <div className="card shadow-sm p-3">
                            <h5 className="card-title mb-4">Contact Information</h5>
                            <p><strong>Address:</strong> 123 Farm Street, Agri City, Country</p>
                            <p><strong>Phone:</strong> +91 12345 67890</p>
                            <p><strong>Email:</strong> info@agrifarm.com</p>
                            <p><strong>Working Hours:</strong> Mon - Sat, 9:00 AM - 6:00 PM</p>

                            {/* Optional Map Placeholder */}
                            <div className="mt-4" style={{ height: "200px", backgroundColor: "#e9ecef", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <span>Map Placeholder</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
