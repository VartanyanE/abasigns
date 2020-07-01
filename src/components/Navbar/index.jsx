import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import MenuListComposition from "../Menu";
import { Box, Button, IconButton } from "@material-ui/core";
import ModeContext from "../../utils/ModeContext";
import Switch from "@material-ui/core/Switch";
import SvgIcon from "@material-ui/core/SvgIcon";
import { Link } from "react-router-dom";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  toolbar: {
    backgroundColor: theme.palette.primary,
    display: "flex",
    fontFamily: "Yellowtail",
  },
  navbar: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

// const handleClick = () => {
//   console.log("this was clicked");
// };
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function ButtonAppBar() {
  const classes = useStyles();
  // const [color, setColor] = useState();
  const { darkMode, setDarkMode } = useContext(ModeContext);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Box>
            {/* <MenuListComposition /> */}
            <Link to="/">
              <IconButton href="/" size="small">
                <HomeIcon color="disabled" />
              </IconButton>
            </Link>
          </Box>
          <Typography style={{ flexGrow: 1 }} variant="h5">
            ABA SIGNS
          </Typography>

          <IconButton
            className={classes.navbar}
            onClick={() => setDarkMode(!darkMode)}
          >
            <BrightnessHighIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
