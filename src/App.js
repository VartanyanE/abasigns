import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Container from "@material-ui/core/Container";
import Landing from "./pages/Landing";
import About from "./pages/About"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Container maxWidth="md">
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
        </Container> 
      </div>
                                 </Router>
  );
}

export default App;
