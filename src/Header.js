import React from "react";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div
              data-aos="fade-right"
              className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start"
            >
              <h1 className="display-3">Support a cause you</h1>
              <div className="typewriter-container display-3">
              <Typewriter
                options={{
                  strings: ["Care About", "Think About"],
                  autoStart: true,
                  loop: true,
                }}
              />
              </div>

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

            <div data-aos="fade-left" className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img data-aos="fade-left" className="img-fluid" src="./images/hero1.jpg" alt="" />
              <img
                className="img-fluid main-hero-img2"
                src="./images/hero2.jpg"
                alt=""
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
