import React, {useContext} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SvgIcon from "@material-ui/core/SvgIcon";
// import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import ModeContext from "../../utils/ModeContext";
// import { Link } from "react-router-dom";
import { Box} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import PanoramaIcon from '@material-ui/icons/Panorama';

const drawerWidth = 160;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
   
    
  },

  imageLogo : {
    display: "flex",
    height: "50px",
    width: "160px",
    justifyContent: "flex-start"
  },

  imageBox : {
    flexGrow: 1

  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

const PersistentDrawerRight=(props)=> {
  const classes = useStyles();
  const theme = useTheme();
  const { history } = props;
  const [open, setOpen] = React.useState(false);
  const { darkMode } = useContext(ModeContext);
  const itemsList = [
    {
      text: "Home",
      icon: darkMode ? <HomeIcon /> : <HomeIcon color="primary" />,
      onClick: () => {
        history.push("/");
        setOpen(false)
    }},
    {
      text: "Services",
      icon: darkMode ? <PanoramaIcon /> : <PanoramaIcon color="primary" />,
      onClick: () => {
        history.push("/services");
        setOpen(false)
     } },
    {
      text: "Contact",
      icon:  darkMode ? <MailIcon /> : <MailIcon color="primary" />,
      onClick: () =>{ 
        history.push("/contact");
        setOpen(false);

      }
    }
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar color="Secondary"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar disableGutters={true}>
        
          {/* <Typography style={{ flexGrow: 1 }} variant="h5">
            ABA SIGNS
          </Typography> */}
          <Box className={classes.imageBox} >
            <img className={classes.imageLogo} alt= "" src={"https://storage.googleapis.com/wzukusers/user-32345829/images/5aac6a01bde5cYIMijbH/Business-card-backfinal-copy.gif"} />


          </Box>
          {/* <IconButton
            className={classes.navbar}
            onClick={() => setDarkMode(!darkMode)}
          >
            <BrightnessHighIcon />
          </IconButton> */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
            style={{marginRight: "10px"}}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
     
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick} style={{color: "primary"}}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
        </List>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
    </div>
  );
}

export default withRouter(PersistentDrawerRight)
