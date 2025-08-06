import "./Section4.css";

const Section4 = () => {
  return (
    <>
      <div class="deals">
        <div class="deals-content">
          <h2>Last minute deals in unique places</h2>
          <p>
            Plan, book, and embark on your dream adventure with <br />
            our expert guidance and tailored experiences.
          </p>

          <div class="deals-cards">
            <div class="deal-card">
              <img
                src="https://i.pinimg.com/736x/e2/5d/85/e25d850dcb40af5c1cde312f118a4a00.jpg"
                alt=""
              />
              <h3>Hotel Parkview Resort</h3>
              <p>Antigua, West Indies</p>
              <p class="price">$999.99</p>
              <p class="date">From Tue Nov 26,Sat Nov 30(4 nights)</p>
            </div>

            <div class="deal-card">
              <img
                src="https://i.pinimg.com/1200x/5d/3d/a9/5d3da9200036cf9a0fdc8bbdb7aef9ca.jpg"
                alt=""
              />
              <h3>Central plaza Resort</h3>
              <p>Koggala, Sri-Lanka</p>
              <p class="price">$999.99</p>
              <p class="date">From Tue Nov 26,Sat Nov 30(4 nights)</p>
            </div>

            <div class="deal-card">
              <img
                src="https://i.pinimg.com/1200x/3c/ad/92/3cad925df90cbeaa7e728d75eefda0fe.jpg"
                alt=""
              />
              <h3>The Eleven Hotel and Resort</h3>
              <p>Essaouira, Morocco</p>
              <p class="price">$999.99</p>
              <p class="date">From Tue Nov 26,Sat Nov 30(4 nights)</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
