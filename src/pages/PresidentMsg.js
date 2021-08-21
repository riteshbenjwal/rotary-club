import React from "react";
import Footer from "../Footer";
import Navbar from "../navbar";

const PresidentMsg = () => {
  return (
    <>
      <Navbar />

      <section>
        <div className="container">
          <h1 className="main-heading text-center my-4 fw-bold">
            Rtn. Raman Wazir (President)
          </h1>
          <p className="text-start main-hero-para mt-5 msg-para">
            Rotary club Jammu Tawi has a distinguished place in the map of
            rotary district 3070.Being the oldest club of Jammu and Kashmir with
            the history of powerful and competent Presidents. I feel honoured
            and proud standing in the line of Presidents who have created bench
            mark for other club to follow.
          </p>
          <p className="text-start main-hero-para mt-3 msg-para">
            The President collar bring on my shoulder all the expectations of
            the previous Presidents and torch to light the future of the club.
            The year that went by was the year of challenges and pandemic
            crawling on the mankind throughout the world and the rotary like
            ever extending all its might and resources to fight the dreaded
            Covid-19 .
          </p>
          <p className="text-start main-hero-para mt-3 msg-para">
            The club has the public Image which I have to carry with me for the
            year along with my team and club members. I m sure my team and my
            club will help me in sailing through another year of this Pandemic
            curse. I am sure we can and we will do all that is possible and
            expected of Rotarian. I thank my team and my directors for placing
            and imposing their faith in me and giving an opportunity to serve
            Rotary.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PresidentMsg;
