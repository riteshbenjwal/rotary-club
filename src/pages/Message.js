import React, { useState } from "react";
import messageApi from "../API/messageApi";
import Footer from "../Footer";
import Navbar from "../navbar";
import { Link } from "react-router-dom";

const Message = () => {
  const [messageData, setMessageData] = useState(messageApi);
  return (
    <>
      <Navbar />
      {/* Message Area */}
      <section className="message-main-container my-5">
        <div className="container message-container">
          <h1 className="main-heading text-center fw-bold ">Message</h1>

          <p className="display-5 mt-3">1. Rtn. U.S. Ghai </p>

          <button className="btn-style btn-style-border ">
            <Link to="/rtmsg" className="nav-link">
              Read
            </Link>
          </button>

          <p className="display-5 mt-3">
            2. Rtn. Dr. Dushyant Choudhary (District Gov)
          </p>

          <button className="btn-style btn-style-border ">
            <Link to="/districtmsg" className="nav-link">
              Read
            </Link>
          </button>

          <p className="display-5 mt-3">3. Rtn. Raman Wazir (President) </p>

          <button className="btn-style btn-style-border ">
            <Link to="/presidentmsg" className="nav-link">
              Read
            </Link>
          </button>

          <p className="display-5 mt-3">4. Rtn. Ramnik Singh (Secretary) </p>

          <button className="btn-style btn-style-border ">
            <Link to="/secretarymsg" className="nav-link">
              Read
            </Link>
          </button>
        </div>
      </section>
      {/* Message area end */}

      <Footer />
    </>
  );
};

export default Message;
