import React from 'react'
import "./Hero.css"
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Hero() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.pinimg.com/736x/b7/ee/06/b7ee068397409d41f97779f3d75581f0.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.pinimg.com/736x/c8/62/fc/c862fcceb3be73fa9decae2b43fc18a6.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.pinimg.com/736x/e7/e3/14/e7e3146553cc5fd1b1e0aff6cdad23cf.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>

                <div className="info row text-center justify-content-center align-items-center gap-2">
                    <div className="col-md-2 col-6 mb-4">
                        <i class="bi bi-person fs-1"></i>
                        <h4>40,000+</h4>
                        <p>Students Trained</p>
                    </div>
                    <div className="col-md-2 col-6 mb-4">
                        <i className="bi bi-book fs-1"></i>
                        <h4>50+</h4>
                        <p>Approved Courses</p>
                    </div>
                    <div className="col-md-2 col-6 mb-4">
                        <i className="bi bi-briefcase fs-1"></i>
                        <h4>1500+</h4>
                        <p>Companies Tie-Ups</p>
                    </div>
                    <div className="col-md-2 col-6 mb-4">
                        <i className="bi bi-building fs-1"></i>
                        <h4>22+</h4>
                        <p>Branches</p>
                    </div>
                    <div className="col-md-2 col-6 mb-4">
                        <i className="bi bi-award fs-1"></i>
                        <h4>8</h4>
                        <p>Certification</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
