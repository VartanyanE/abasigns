import React, { useContext } from "react";
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
import CardComp from "../components/Card";
import ImageCardContext from "../utils/ImageCardContext";

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
    marginTop: "10px",
    height: "200px",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
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
  const { imageCard, setImageCard } = useContext(ImageCardContext);

  return (
    <Router>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={0} sm={3}></Grid>
          <Grid item xs={12} sm={6}>
            {imageCard.map((imageMap) => (
              <CardComp
                image={imageMap.image}
                title={imageMap.name}
                key={imageMap.id}
                description={imageMap.description}
              />
            ))}
          </Grid>
          <Grid item xs={0} sm={3}></Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default Landing;
