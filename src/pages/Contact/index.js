import React, { useEffect } from "react";
// import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { Paper, Grid, Button } from "@material-ui/core";
import {useForm} from "react-hook-form";

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

  itemCenter: {
    display: "flex",
    justifyContent: "center",
    
    alignItems: "center",
  },

  buttonStyle: {
    color: theme.palette.success.light,
  },

  messageInput : {
    height: "80px"
  }
}));

function Contact() {
  const classes = useStyles();
  const {register, handleSubmit, reset} = useForm();



  const onSubmit = (data, event) => {
    console.log(data);
    event.target.reset()
  }


  // useEffect(async () => {
  //   const result = await fetch('./api/formValues.json'); // result: { firstName: 'test', lastName: 'test2' }
  //   reset(result); // asynchronously reset your form values
  // }, [reset])

  // const [form, setForm] = useState({
  //   name: "",
  //   message: "",
  //   email: "",
  //   sent: false,
  //   buttonText: "Send Message",
  // });

  // const formSubmit = (e) => {
  //   e.preventDefault();

  //   setForm({
  //     buttonText: "...sending",
  //   });

  //   let data = {
  //     name: form.name,
  //     email: form.email,
  //     message: form.message,
  //   };

  //   axios
  //     .post("API_URI", data)
  //     .then((res) => {
  //       setForm({ sent: true }, resetForm());
  //     })
  //     .catch(() => {
  //       console.log("Message not sent");
  //     });
  // };
  // const resetForm = () => {
  //   setForm({
  //     name: "",
  //     message: "",
  //     email: "",
  //     buttonText: "Message Sent",
  //   });
  // };

  return (
    <Router>
      <div className={classes.root}>
        <Grid container spacing={0} style={{ marginTop: "100px" }} >
          <Grid item xs={3}></Grid>
          <Grid item xs={6} className={classes.itemCenter}>
           <h1>Contact Form</h1>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={12} className={classes.paper}>
          <form onSubmit = {handleSubmit(onSubmit)} >
              <input type = "text" placeholder="Name" name="name" ref={register} color="primary" /><br/>
              <input type ="text" placeholder= "Email" name="email" ref={register} /><br/>
              <input type ="textarea" placeholder= "Message" name="message" ref={register} className={classes.messageInput} /><br/>
              <Button variant="contained" type="submit">Send</Button>
            </form>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default Contact;
