import React from "react";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Address</h2>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Donate</h2>
                  <ul>
                    <li>
                      <a href="#">Donate</a>
                    </li>
                    <li>
                      <a href="#">Donate</a>
                    </li>
                    <li>
                      <a href="#">Donate</a>
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
                      <a href="#">
                        <i className="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                        <a href="#">
                            <i className="fab fa-facebook fontawesome-style"></i>
                            </a>
                    </div>
                    <div className="col-3 mx-auto">
                        <a href="#">
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
