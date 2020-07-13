import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import ImgMediaCard from "../components/Card";
import { Button, Tab, Tabs } from "@material-ui/core";
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
  button: {
    display: "flex",
    justifyContent: "center",
  },
}));

function About() {
  const classes = useStyles();
  const [value, setValue] =  useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {/* <Grid item xs={0} sm={2}></Grid> */}
        <Grid item xs={2} sm={2}></Grid>
        <Grid item xs={8} sm={8}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Item One" />
          <Tab label="Item Two"  />
          
          </Tabs>
        </Grid>
       <Grid item xs={2} sm={2}></Grid>
       
      </Grid>
    </div>
  );
}

export default About;
