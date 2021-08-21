import React, { useState } from "react";
import fourwayTest from "./API/fourwayTest";
import peopleofaction from "./API/peopleofaction";

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(fourwayTest);
  const [actionData, setActionData] = useState( peopleofaction);

  return (
    <>
      <section className="common-section  four-test">
        <div data-aos="flip-left" className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center four-test-leftside-img">
              <img src="./images/four-way-test.png" alt="4test" />
            </div>
            {/* right side data  */}
            <div data-aos="flip-right" className="col-12 col-lg-7 four-test-list">
              <h1 className="main-heading">Four Way test</h1>
              {aboutData.map((curElem) => {
                return (
            
                  <>
                    <div className="row four-test-info " key={curElem.id}>
                      <div className="col-1 four-test-number">{curElem.id}</div>
                      <div className="col-10 four-test-data">
                        <h2>{curElem.title}</h2>
                        <p className="main-hero-para">{curElem.info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Part */}

      <section className="common-section  four-test four-test-rightside">
        <div data-aos="flip-right" className="container mb-5">
          <div className="row">
            {/* left  side data  */}
            <div className="col-12 col-lg-7 four-test-rightside-content d-flex justify-content-center align-items-start flex-column ">
              <h1 className="main-heading">We are People of Action</h1>
              {actionData.map((curElem) => {
                return (
                  <>
                    <div className="row four-test-info " key={curElem.id}>
                      <div className="col-1 four-test-number">{curElem.id}</div>
                      <div className="col-10 four-test-data">
                        <h2>{curElem.title}</h2>
                        <p className="main-hero-para">{curElem.info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border ">Learn More</button>
            </div>

            {/* left side data  */}
            <div data-aos="flip-left" className="col-12 col-lg-5 four-test-rightside-img">
              <img src="./images/below-size.png" alt="4test" />
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default AboutUs;
