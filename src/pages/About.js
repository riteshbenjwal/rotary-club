import React from "react";
import Footer from "../Footer";

import Navbar from "../navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          <h1 className="main-heading text-center mt-4 fw-bold">
            The Founder of Rotary
          </h1>
          {/* <img className="img-fluid d-flex justify-content-center align-item-center" src="./images/paul.jpg" alt="paul"/> */}
          <p className="text-center main-hero-para mt-3 text-decoration-underline text-primary">
            Rtn. Paul Percival Harris(1868-1947)
          </p>
          <p className="text-center main-hero-para mt-3">
            Born in Racine, Wisconsin, USA, on 19 April 1868, Paul P. Harris was
            the second of six children of George N. and Cornelia Bryan Harris.
            Paul P.
            <br />
            Harris was born in Racine, Wisconsin. At age three, when his family
            fell on hard times, they moved to Vermont to live with Harris'
            paternal grandparents.
          </p>
          <p className="text-center main-hero-para mt-3">
            He attended Princeton University, the University of Vermont and the
            University of Iowa. For the next five years he worked odd jobs as a
            paul harris 150salesman and reporter for a newspaper, on fruit
            farms, as an actor, a cowboy, and on cattle ships that traveled to
            Europe.
            <br />
            Harris eventually settled in the Beverly neighborhood of Chicago,
            where he lived until his death in 1947.
          </p>

          <p className="text-start main-hero-para">
            He began his law practice in 1896 in Chicago. In 1905 Harris
            organized the first Rotary club “in fellowship and friendship” with
            three business associates, Silvester Schele, Gustavus Loehr and
            Hiram Shorey. His initial goal was to create a club of professional
            and businessmen for friendship and fellowship.
          </p>
          <p className="text-start main-hero-para">
            Early on, Harris realized that Rotary needed a greater purpose.
            While Harris served as president of the Chicago Rotary Club in 1907,
            the club initiated its first public service project, the
            construction of public toilets in Chicago. This step transformed
            Rotary into the world's first service club.
          </p>

          <p className="text-start main-hero-para">
            Harris had great ambitions for the growth of Rotary, and very early
            in the organization's history new clubs were started, first on the
            West Coast in San Francisco, and then all over the US and in Europe.
            Paul Harris died on January 27, 1947. More than 300,000 Rotarians
            mourned. An outpouring of contributions to The Rotary Foundation
            created the Paul Harris Memorial Fund, which continues to support
            the Rotary Foundation.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
