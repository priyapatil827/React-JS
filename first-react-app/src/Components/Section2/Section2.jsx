import "./Section2.css";

const Section2 = () => {
  return (
    <>
      <div class="heroSection">
        <p>TRAVELLER'S FAVOURITE</p>
        <h3>
          Explore All Popular <br />
          Locations
        </h3>
        <h4>
          Plan, book, and embark on your dream adventure with our <br />
          expert guidance and tailored experiences
        </h4>
        <div class="grid-container">
          <div class="location-card large">
            <img
              src="https://i.pinimg.com/736x/8e/08/42/8e0842284dd4fc3888591ebb3d1bdb5d.jpg"
              class="img1"
              alt=""
            />
            <h3>Singapore</h3>
          </div>
          <div class="location-card small">
            <img
              src="https://i.pinimg.com/1200x/81/4b/32/814b326bac2e8c4d5fc1a535fc45a298.jpg"
              alt=""
            />
            <h3>Australia</h3>
          </div>
          <div class="location-card small2">
            <img
              src="https://i.pinimg.com/1200x/5f/9c/f8/5f9cf8d0b41a8676ff89177269c1391d.jpg"
              alt=""
            />
            <h3>Thailand</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
