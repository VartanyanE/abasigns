import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import MenuListComposition from "../Menu";
import { Box } from "@material-ui/core";
import ModeContext from "../../utils/ModeContext";
import Switch from "@material-ui/core/Switch";

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
  navbar: {
    // backgroundColor: theme.palette.success.light
  },
}));

// const handleClick = () => {
//   console.log("this was clicked");
// };

export default function ButtonAppBar() {
  const classes = useStyles();
  // const [color, setColor] = useState();
  const { darkMode, setDarkMode } = useContext(ModeContext);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Box>
            <MenuListComposition />
          </Box>

          <Typography variant="h5" className={classes.title}>
            ABA Signs
          </Typography>
          <Switch
            style={{ color: "#21173d" }}
            size="small"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            color="disabled"
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
