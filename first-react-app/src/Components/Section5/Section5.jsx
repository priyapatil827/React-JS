import "./Section5.css";

const Section5 = () => {
  return (
    <>
    <div class="winter">
        <div class="winter-overlay">
          <h2 class="winter-heading">Winter Special</h2>
          <p class="winter-subtext">
            Plan, book, and embark on your dream adventure with <br />
            our expert guidance and tailored experiences.
          </p>

          <div class="winter-cards">
            <div class="winter-card">
              <img src="https://i.pinimg.com/1200x/02/1b/ff/021bff44798638c0e0ce78b5aea86c0f.jpg" alt="" />
              <div class="text-block">
                <h3>Nepal</h3>
                <p>From $500–1000</p>
              </div>
            </div>

            <div class="winter-card">
              <img src="https://i.pinimg.com/736x/25/ef/cc/25efcc78668b2b8c44ef8c3905baf21b.jpg" alt="Kashmir" />
              <div class="text-block badge">Save 20% today</div>
              <div class="text-block">
                <h3>Kashmir</h3>
                <p>From $500–1000</p>
              </div>
            </div>

            <div class="winter-card">
              <img src="https://i.pinimg.com/736x/27/1a/17/271a179c133e3ee149cfc8a79f1447b8.jpg" alt="Switzerland" />
              <div class="text-block badge center">
                Exclusive Trip this Winter
              </div>
              <div class="text-block">
                <h3>Switzerland</h3>
                <p>From $300–700</p>
              </div>
            </div>

            <div class="winter-card">
              <img src="https://i.pinimg.com/736x/05/8d/c3/058dc3d6db66998d70aad03762407fc8.jpg" alt="Tibet" />
              <div class="text-block">
                <h3>Tibet</h3>
                <p>From $500–1000</p>
              </div>
            </div>

            <div class="winter-card">
              <img src="https://i.pinimg.com/1200x/e4/01/05/e401058685c7b981ec7e498238343fe9.jpg" alt="South Korea" />
              <div class="text-block badge yellow">Save 30% today</div>
              <div class="text-block">
                <h3>South Korea</h3>
                <p>From $500–1000</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default Section5;
