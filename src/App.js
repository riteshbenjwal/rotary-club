import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Message from "./pages/Message";
import GhaiMsg from "./pages/GhaiMsg";
import DistrictMsg from "./pages/DistrictMsg";
import SecretaryMsg from "./pages/SecretaryMsg";
import  PresidentMsg from "./pages/PresidentMsg";


const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/error" component={Error}></Route>
        <Route exact path="/message" component={Message}></Route>
        <Route exact path="/rtmsg" component={GhaiMsg}></Route>
        <Route exact path="/districtmsg" component={DistrictMsg}></Route>
        <Route exact path="/secretarymsg" component={SecretaryMsg}></Route>
        <Route exact path="/presidentmsg" component={PresidentMsg}></Route>
      </Switch>

    </>
  );
};

export default App;

