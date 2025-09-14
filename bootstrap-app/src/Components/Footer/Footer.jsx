import React from 'react'
import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer bg-dark text-white pt-5 pb-4">
            <div className="container text-center text-md-start">
                <div className="row">
                    <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">SkillUp</h6>
                        <p>
                            SkillUp is your go-to platform for learning new skills, improving
                            knowledge, and growing professionally.
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
                        <p>
                            <a className="text-white text-decoration-none" href="#">
                                Home
                            </a>
                        </p>
                        <p>
                            <a className="text-white text-decoration-none" href="#">
                                Courses
                            </a>
                        </p>
                        <p>
                            <a className="text-white text-decoration-none" href="#">
                                About
                            </a>
                        </p>
                        <p>
                            <a className="text-white text-decoration-none" href="#">
                                Contact
                            </a>
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                        <p>Email: info@skillup.com</p>
                        <p>Phone: +91 1234567890</p>
                        <p>Address: Mumbai, India</p>
                    </div>
                </div>
                <hr className="mb-4" />
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>© 2025 SkillUp. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>

    )
}
