import React, { useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { Paper, Grid, Button } from "@material-ui/core";
import {useForm} from "react-hook-form";
import { toast, ToastContainer, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },



  itemCenter: {
    display: "flex",
    justifyContent: "center",
    
    alignItems: "center",
  },

  customtoast: {
    backgroundColor: "#f44336"

  },



  messageInput : {
    height: "80px"
  }
}));

function Contact() {
  const classes = useStyles();
  const {register, handleSubmit, reset} = useForm();
  const successToast = () =>{
    toast("Your Message Was Sent!", {
      className: "customtoast",
      draggable:true,
      position: toast.POSITION.TOP_CENTER,
      transition: Zoom,
      autoClose: 4000
    })
  }



  const onSubmit = (data, event) => {
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:data
  }).then((response)=>{
      if (response.data.msg === 'success'){
          successToast();
          event.target.reset()
      }else if(response.data.msg === 'fail'){
          alert("Message failed to send.")
      }
  })
    
  }


 

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
