import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ImgMediaCard from "../components/Card";
import {Button} from "@material-ui/core"

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
}));

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {/* <Grid item xs={0} sm={2}></Grid> */}
        <Grid item xs={0} sm={5}></Grid>
        <Grid item xs={12} sm={2}>
        <Button variant="contained" color="primary" href="/">
        About
      </Button>
        </Grid>
        <Grid item xs={0} sm={5}></Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Card</Paper>
        </Grid>
        <Grid item xs={6}>
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
        <Grid item xs={3}>
          <Paper className={classes.paper}>Card</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
