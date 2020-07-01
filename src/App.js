import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Container from "@material-ui/core/Container";
import Landing from "./pages/Landing";
import About from "./pages/About";
import { ThemeProvider, Paper, CssBaseline } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core";
import ModeContext from "./utils/ModeContext";
import Yellowtail from "./fonts/Yellowtail.ttf";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // const yellowtail = {
  //   fontFamily: "Yellowtail",
  //   fontStyle: "normal",
  //   fontDisplay: "swap",
  //   fontWeight: 300,
  //   src: `
  //     local('Yellowtail'),
  //     local('Yellowtail-Regular'),
  //     url(${Yellowtail}) format('ttf')
  //   `,
  //   unicodeRange:
  //     "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
  // };

  const theme = createMuiTheme({
    typography: {
      fontFamily: "MuseoModerno, Yellowtail, Arial",
    },
    // overrides: {
    //   MuiCssBaseline: {
    //     "@global": {
    //       "@font-face": [yellowtail],
    //     },
    //   },
    // },
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#1a237e",
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
          <CssBaseline />
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
