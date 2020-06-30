import React, { useState, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Container from "@material-ui/core/Container";
import Landing from "./pages/Landing";
import About from "./pages/About";
import { ThemeProvider, Paper } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core";
import ModeContext from "./utils/ModeContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#bbdefb",
        text: "#81c784",
      },
      secondary: {
        main: "#f50057",
        text: "#81c784",
      },
      success: {
        main: "#bcbda4",
      },
    },
  });

  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/* <Switch> */}
      <ModeContext.Provider value={{ darkMode, setDarkMode }}>
        <ThemeProvider theme={theme}>
          <Paper style={{ height: "100vh" }}>
            <div>
              <Navbar />
              <Container maxWidth="lg">
                <Route exact path="/" component={Landing} />
                <Route path="/about" component={About} />
              </Container>
            </div>
          </Paper>
        </ThemeProvider>
      </ModeContext.Provider>
      {/* </Switch> */}
    </Router>
  );
}

export default App;
