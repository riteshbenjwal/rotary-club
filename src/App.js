import React from "react";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import { Footer } from "./Footer";

import Header from "./Header";
import HowitWorks from "./HowitWorks";
import Navbar from "./navbar";


const App = () => {
  return (
    <>
      <Navbar />
      <Header/>
      <HowitWorks/>
      <AboutUs/>
      <Contact/>
      <Footer/>
     
      
    </>
  );
};

export default App;
