import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section classNameName="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light  ">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img
                className="img-fluid logo"
                src="./images/logo.png"
                alt="logo"
              />
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span class="navbar-toggler-icon" />
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/message">
                    Message
                  </NavLink>
                </li>
                
              </ul>
              <form className="d-flex">
                <button
                  className="btn btn-style btn-style-border"
                  type="submit"
                >
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
