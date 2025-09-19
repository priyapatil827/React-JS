import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <section className="services py-5">
      <div className="container">
        <h1 className="text-center mb-5 fw-bold text-success">🌱 Our Services</h1>

        <div className="row g-4">
          {/* Service 1 */}
          <div className="col-md-4">
            <div className="card shadow-sm service-card h-100">
              <div className="card-body text-center">
                <i className="bi bi-seedling display-4 text-success mb-3"></i>
                <h5 className="card-title fw-bold">Organic Farming</h5>
                <p className="card-text">
                  We promote eco-friendly and sustainable organic farming
                  practices to increase productivity without harming nature.
                </p>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-md-4">
            <div className="card shadow-sm service-card h-100">
              <div className="card-body text-center">
                <i className="bi bi-water display-4 text-primary mb-3"></i>
                <h5 className="card-title fw-bold">Irrigation Solutions</h5>
                <p className="card-text">
                  Smart irrigation systems to ensure water conservation and
                  maximum crop yield with minimal resources.
                </p>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-md-4">
            <div className="card shadow-sm service-card h-100">
              <div className="card-body text-center">
                <i className="bi bi-truck display-4 text-warning mb-3"></i>
                <h5 className="card-title fw-bold">Agro Supply</h5>
                <p className="card-text">
                  High-quality seeds, fertilizers, and farming tools delivered
                  directly to your doorstep.
                </p>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="col-md-4">
            <div className="card shadow-sm service-card h-100">
              <div className="card-body text-center">
                <i className="bi bi-mortarboard display-4 text-danger mb-3"></i>
                <h5 className="card-title fw-bold">Farmer Training</h5>
                <p className="card-text">
                  Expert workshops and training sessions to guide farmers in
                  modern agricultural practices.
                </p>
              </div>
            </div>
          </div>

          {/* Service 5 */}
          <div className="col-md-4">
            <div className="card shadow-sm service-card h-100">
              <div className="card-body text-center">
                <i className="bi bi-globe2 display-4 text-info mb-3"></i>
                <h5 className="card-title fw-bold">Market Access</h5>
                <p className="card-text">
                  Helping farmers connect with global markets and get fair prices
                  for their produce.
                </p>
              </div>
            </div>
          </div>

          {/* Service 6 */}
          <div className="col-md-4">
            <div className="card shadow-sm service-card h-100">
              <div className="card-body text-center">
                <i className="bi bi-leaf display-4 text-success mb-3"></i>
                <h5 className="card-title fw-bold">Soil Health</h5>
                <p className="card-text">
                  Soil testing and consultancy to maintain fertility and ensure
                  better crop growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
