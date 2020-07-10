import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Services from "./pages/Services"
import Contact from "./pages/Contact/index"
import Container from "@material-ui/core/Container";
import Landing from "./pages/Landing";
// import About from "./pages/About";
import { ThemeProvider, Paper, CssBaseline } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core";
import ModeContext from "./utils/ModeContext";
import ImageCardContext from "./utils/ImageCardContext"
// import Yellowtail from "./fonts/Yellowtail.ttf";
import imagecard from "./imagecard.json"
import PersistentDrawerRight from "./components/Drawer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [imageCard, setImageCard] = useState([]);

  
  useEffect(() => {
      setImageCard(imagecard);
  },[]);

  
  const theme = createMuiTheme({
    typography: {
      fontFamily: "MuseoModerno, Yellowtail, Arial",
    },
  
    palette: {
      type: "dark",
      primary: {
        main: "#f44336",
        text: "#81c784",
      },
      secondary: {
        main: "#1b1b1b",
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
        <ImageCardContext.Provider value ={{imageCard, setImageCard}}>

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Paper>
            <div>
             
              <PersistentDrawerRight />
              <Container maxWidth="lg">
                <Route exact path="/" component={Landing} />
                <Route path="/contact" component={Contact} />
                <Route path="/services" component={Services} />
              </Container>
            </div>
          </Paper>
        </ThemeProvider>
        </ImageCardContext.Provider>
      </ModeContext.Provider>
      {/* </Switch> */}
    </Router>
  );
}

export default App;
