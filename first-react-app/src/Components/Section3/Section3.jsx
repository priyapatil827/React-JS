import "./Section3.css";

const Section3 = () => {
  return (
    <>
    <div class="sec">
      <div class="section3">
        <h2>Book your Next Trip</h2>
        <div class="nav-tabs">
          <span class="active">Famous Area</span>
          <span>Mountains</span>
          <span>Cities</span>
          <span>Nature & Wildlife</span>
        </div>

        <div class="card-container">
          <div class="card">
            <img
              src="https://i.pinimg.com/736x/8f/f3/75/8ff3754ce2df951c607a0c2e014fd119.jpg"
              alt="Sri Lanka"
            />
            <h3>Sri Lanka</h3>
            <p>Galle, Sri Lanka</p>
          </div>

          <div class="card">
            <img
              src="https://i.pinimg.com/1200x/07/1d/3b/071d3b4a5ebb658209e103bcb56a4fae.jpg"
              alt="India"
            />
            <h3>India</h3>
            <p>Tajmahal, Agra</p>
          </div>

          <div class="card">
            <img
              src="https://i.pinimg.com/1200x/46/5a/d9/465ad9276d298062c331b662a90ee7fd.jpg"
              alt="Bangladesh"
            />
            <h3>Bangladesh</h3>
            <p>Chandranath Pahar, Bandarban</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Section3;
