import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
const useStyles = makeStyles({
  list: {
    width: 200,
    paddingLeft: 10,
    paddingRight: 15,
  },
  fullList: {
    width: "auto",
  },
  linkstyle: {
    textDecoration: "none",
    color: "black",
  },
});

export default function Rightdrawer({ setCategory }) {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Button style={{ width: "175px", height: "40px" }}>
          <ListItem>
            <ChevronRightIcon
              style={{ fontSize: "40", position: "relative", right: "15px" }}
            />
          </ListItem>
        </Button>
      </List>
      <Divider />
      <List>
        <Link to="/" className={classes.linkstyle}>
          <ListItem style={{ height: 40, borderRadius: 5 }} button>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to="/familymanager" className={classes.linkstyle}>
          <ListItem style={{ height: 40, borderRadius: 5 }} button>
            <ListItemText primary="Admin" />
          </ListItem>
        </Link>

        <Link to="investment" className={classes.linkstyle}>
          <ListItem style={{ height: 40, borderRadius: 5 }} button>
            <ListItemText primary="You Investments" />
          </ListItem>
        </Link>
        <Link to="/news" className={classes.linkstyle}>
          <ListItem style={{ height: 40, borderRadius: 5 }} button>
            <ListItemText primary="Stock News" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key="right">
        <IconButton
          onClick={toggleDrawer("right", true)}
          style={{ color: "white", marginRight: "40px" }}
        >
          <MenuIcon style={{ fontSize: "30px" }} />
        </IconButton>

        <SwipeableDrawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {list("right")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
