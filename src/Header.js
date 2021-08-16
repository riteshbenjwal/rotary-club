import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
              <h1 className="display-3">
                Support a cause you
                <br /> Care about
              </h1>
              <p className="main-hero-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit qui quod iure nam placeat maxime ipsam vel dolore quasi
                explicabo.
              </p>

              <h3>Get Updates</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"
                />
                <div className="input-group-button">Submit</div>
              </div>
            </div>

            {/* Main Header img */}

            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img className="img-fluid" src="./images/hero1.jpg" alt="" />
              <img className="img-fluid main-hero-img2" src="./images/hero2.jpg" alt="" />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
