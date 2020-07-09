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
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <h1>Login</h1>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <form class="login">
                <div className="form-group">
                  <label for="exampleInputEmail1"></label>
                  <input
                    // onChange={handleChange}
                    type="email"
                    class="form-control"
                    name="email"
                    placeholder="Email Address"
                    style={{ marginBottom: "8px" }}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1"></label>
                  <input
                    // onChange={handleChange}
                    type="password"
                    class="form-control"
                    name="password"
                    placeholder="Password"
                    style={{ marginBottom: "8px" }}
                  />
                </div>
                <Button
                  type="submit"
                  color="primary"
                  variant="outlined"
                  //   onClick={handleLogin}
                  //   setUser={user}
                >
                  Login
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default Contact;
