import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuListComposition from "../Menu";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const handleClick = () => {
  console.log("this was clicked");
};

export default function ButtonAppBar() {
  const classes = useStyles();
  const [color, setColor] = useState();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Box>
            <MenuListComposition />
          </Box>

          <Typography variant="h5" className={classes.title}>
            ABA Signs
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
