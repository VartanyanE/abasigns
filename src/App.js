import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Container from "@material-ui/core/Container";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Container maxWidth="md">
          <Route exact path="/" component={Landing} />
        </Container>
      </div>
    </Router>
  );
}

export default App;
