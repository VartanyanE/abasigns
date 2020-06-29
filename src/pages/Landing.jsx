import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ImgMediaCard from "../components/Card";
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "../pages/About"
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import SaveIcon from '@material-ui/icons/Save';



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
    color: theme.palette.success.light
    },
    
  buttonStyle : {
    // color: theme.palette.success.light
  }
}));


function Landing() {
  const classes = useStyles();
  const [showButton, setShowButton]= useState(false);

  


  return (
    <Router>
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={2} sm={5}></Grid>
          <Grid item xs={8} sm={2}  >
          <Box className={classes.buttonCenter} > <Button className={classes.buttonStyle} variant="contained" color="primary" href="/about" >
        Landing
      </Button>
      </Box>
        </Grid>
        <Grid item xs={2} sm={5}></Grid>
        <Grid item xs={6} >
       {showButton ? "" :  <Button variant="contained" color="primary" className={classes.buttonStyle}  >
        Secondary 
  </Button> }
        </Grid>
        <Grid item xs={6}>
       <Button
        variant="contained"
        color="primary"
        onClick={() => setShowButton(!showButton)}
       
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
        </Grid>
      </Grid>
    </div>
    </Router>
  );
}

export default Landing;
