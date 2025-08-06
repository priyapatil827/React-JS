import "./Section6.css";

const Section6 = () => {
  return (
    <>
      <footer class="footer">
        <div class="footer-top">
          <div class="footer-brand">
            <h2>
              go<span class="blue">explore</span>
            </h2>
            <div class="footer-links">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">About us</a>
              <a href="#">Contact</a>
            </div>
          </div>

          <div class="footer-columns">
            <div>
              <h4>Available Countries</h4>
              <ul>
                <li>Australia</li>
                <li>Bangladesh</li>
                <li>Canada</li>
                <li>Denmark</li>
                <li>Finland</li>
                <li>England</li>
                <li>
                  <a href="#">More Countries +</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Trips</li>
                <li>Reviews</li>
                <li>Resources</li>
              </ul>
            </div>
            <div>
              <h4>Policies</h4>
              <ul>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>Terms of use</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
            <div>
              <h4>Help</h4>
              <ul>
                <li>Support</li>
                <li>Contact</li>
                <li>Cancel a ticket</li>
                <li>Buy Ticket</li>
                <li>Book a trip</li>
              </ul>
            </div>
            <div class="footer-app">
              <h4>Download the app</h4>
              <img src="/appstore.png" alt="App Store" />
              <img src="/playstore.png" alt="Google Play" />
            </div>
          </div>
        </div>

        <div class="legal">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <p>© All rights reserved by goexplore 2024</p>
        </div>
      </footer >
    </>
  );
};

export default Section6;
