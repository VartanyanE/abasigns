import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ImgMediaCard from "../components/Card";
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "../pages/About"
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
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

  button: {
    justifyContent: "center"
  }
}));


function Landing() {
  const classes = useStyles();
  const [showButton, setShowButton]= useState(false);

  
const handleClick = () => {
  if(showButton === false)
  {setShowButton(true);
} else  {
  setShowButton(false);
  
}
}
  return (
    <Router>
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={0} sm={5}></Grid>
        <Grid item xs={12} sm={2}>
        <Button variant="contained" color="primary" href="/about">
        Landing
      </Button>
        </Grid>
        <Grid item xs={0} sm={5}></Grid>
        <Grid item xs={6} className={classes.button}>
       {showButton ? "" :  <Button variant="outlined" color="secondary" >
        Secondary 
  </Button> }
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
        </Grid>
      </Grid>
    </div>
    </Router>
  );
}

export default Landing;
