import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/Layout/Navbar";
import { convertRegion } from "./components/Util";

function App() {
  console.log(convertRegion("New York", 2));
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
