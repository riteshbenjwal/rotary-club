import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Message from "./pages/Message";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/error" component={Error}></Route>
        <Route path="/message" component={Message}></Route>
      </Switch>
    </>
  );
};

export default App;

