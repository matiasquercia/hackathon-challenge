import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CodeIcon from "@material-ui/icons/Code";
import FaceIcon from "@material-ui/icons/Face";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import HomeIcon from "@material-ui/icons/Home";


const drawerWidth = 65;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.info.dark,
  },
  drawer: {
    display: "flex",
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  iconSelect: {
    color: "green",
    width: 29,
    height: 29,
  },
  icon: {
    width: 29,
    height: 29,
    color: "#0E2F3480"
  },
  iconFindingSelect: {
    color: "green",
    fontSize: "32px"
  },
  iconFinding: {
    fontSize: "32px",
    color: "#0E2F3480"
  },
  list: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    height: "100%",
  },
  listItem: {
    justifyContent: "center"
  },
  divFaceIcon: {
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "center"
  },
}));

const SideBar = () => {
  const classes = useStyles();
  let pathName = window.location.pathname;

  const [clickedIcon, setclickedIcon] = useState(pathName.slice('/'));


  const onClickedIcon = (icon) => {
    setclickedIcon(icon);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <List className={classes.list}>
          <ListItem>
            <Link to="/home" onClick={() => onClickedIcon("home", "/home")}>
              {clickedIcon === "home" ? (
                <HomeIcon
                  className={classes.iconSelect}
                />
              ) : (
                <HomeIcon
                  className={classes.icon}
                />
              )}
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Link to="/top-developers" onClick={() => onClickedIcon("top-developers", "/top-developers")}>
              {clickedIcon === "top-developers" ? (
                <EmojiEventsIcon 
                  className={classes.iconSelect}
                />
              ) : (
                <EmojiEventsIcon
                  className={classes.icon}
                />
              )}
            </Link>
          </ListItem>
          <ListItem className={classes.divFaceIcon}>
            <Link to="/user-info" onClick={() => onClickedIcon("user")}>
              {clickedIcon === "user" ? (
                <FaceIcon
                  className={classes.iconSelect}
                />
              ) : (
                <FaceIcon
                  className={classes.icon}
                />
              )}
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SideBar;
