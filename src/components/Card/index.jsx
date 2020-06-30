import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles({
//   root: {},
// });

export default function ImgMediaCard() {
  // const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Sign Pic"
          height="100"
          image=""
          title="Sign Pic"
        />
      </CardActionArea>
    </Card>
  );
}
