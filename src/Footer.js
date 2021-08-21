import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Address</h2>
                  <p className="text-start fs-5">A/D Block, Rotary Club Ln, Gandhi Nagar, Jammu, Jammu and Kashmir 180004</p>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Message</h2>
                  <ul>
                    <li>
                      <Link to="/districtmsg">District Governor</Link>
                    </li>
                    <li>
                    <Link to="/presidentmsg">President</Link>
                    </li>
                    <li>
                    <Link to="/secretarymsg">Secretary </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Cause</h2>
                  <ul>
                    <li>
                      <a href="#">Cause</a>
                    </li>
                    <li>
                      <a href="#">Cause</a>
                    </li>
                    <li>
                      <a href="#">Cause</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Follow us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <a href="https://instagram.com">
                        <i className="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                        <a href="https://facebook.com">
                            <i className="fab fa-facebook fontawesome-style"></i>
                            </a>
                    </div>
                    <div className="col-3 mx-auto">
                        <a href="https://youtube.com">
                            <i className="fab fa-youtube fontawesome-style"></i>
                            </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                  <p className="main-hero-para text-center">
                 Developed By Ritesh Benjwal
                  </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;