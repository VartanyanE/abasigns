import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { Paper, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  card: {
    maxWidth: 345,
  },
  media: {
    height: 240,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  height: {
    marginTop: "50px",
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

function Contact() {
  const classes = useStyles();
  const [form, setForm] = useState({
    name: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Send Message",
  });

  const formSubmit = (e) => {
    e.preventDefault();

    setForm({
      buttonText: "...sending",
    });

    let data = {
      name: form.name,
      email: form.email,
      message: form.message,
    };

    axios
      .post("API_URI", data)
      .then((res) => {
        setForm({ sent: true }, resetForm());
      })
      .catch(() => {
        console.log("Message not sent");
      });
  };
  const resetForm = () => {
    setForm({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent",
    });
  };

  return (
    <Router>
      <div className={classes.root}>
        <Grid container spacing={0} style={{ marginTop: "100px" }}>
          <Grid item xs={3}></Grid>
          <Grid item xs={6} className={classes.buttonCenter}>
            <h1>Contact</h1>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default Contact;
