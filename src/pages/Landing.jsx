import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import ImgMediaCard from "../components/Card";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router } from "react-router-dom";
// import About from "../pages/About";
// import Icon from "@material-ui/core/Icon";
// import SaveIcon from "@material-ui/icons/Save";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  height: {
    marginTop: "10px",
    height: "200px",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  card: {
    height: "100px",
  },

  buttonCenter: {
    display: "flex",
    justifyContent: "center",
    height: "200px",
    alignItems: "center",
  },

  buttonStyle: {
    color: theme.palette.success.light,
  },
}));

function Landing() {
  const classes = useStyles();
  // const [showButton, setShowButton] = useState(false);

  // const handleClick = () => {
  //   if (showButton === false) {
  //     setShowButton(true);
  //   } else {
  //     setShowButton(false);
  //   }
  // };
  return (
    <Router>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={2} sm={5}></Grid>
          <Grid item xs={8} sm={2}>
            <Box className={classes.buttonCenter}>
              {" "}
              <Paper elevation="10 ">
                {/* <Button
                  variant="contained"
                  color="primary"
                  href={process.env.PUBLIC_URL + "/about"}
                >
                  Landing
                </Button> */}
              </Paper>
            </Box>
          </Grid>
          {/* <Grid item xs={2} sm={5}></Grid>
          <Grid item xs={6}>
            {showButton ? (
              ""
            ) : (
              <Button variant="outlined" color="secondary">
                Secondary
              </Button>
            )}
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClick}
              endIcon={<SaveIcon>send</SaveIcon>}
            >
              Save
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Card</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Card</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Card</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Card</Paper>
          </Grid> */}
        </Grid>
      </div>
    </Router>
  );
}

export default Landing;