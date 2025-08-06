import "./Section1.css";

const Header = () => {
  return (
    <div className="hero-section">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand fs-3" href="#">
            go<span className="explore">explore</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 gap-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Discover
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tips
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Review
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
            <button className="btn">Sign In</button>
          </div>
        </div>
      </nav>

      <div className="overlay">
        <h1 className="title">Discover. Explore. Go!</h1>
        <p className="description">
          Explore stunning destinations, unique experiences, and plan your
          perfect trip today!
        </p>

        <div className="search-box">
          <div className="tabs">
            <button className="tab active">🏨 Stays</button>
            <button className="tab active">✈️ Flight</button>
            <button className="tab active">🏨 Hotel</button>
            <button className="tab active">🍽️ Restaurant</button>
          </div>
          <div className="form">
            <input type="text" placeholder="Destination" />
            <input type="date" placeholder="Check-In" />
            <input type="date" placeholder="Check-Out" />
            <input type="text" placeholder="Traveler's" />
            <button className="search-btn">🔍 Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
