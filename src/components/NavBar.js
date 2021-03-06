import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Slide from "@material-ui/core/Slide";
import { animateScroll as scroll } from "react-scroll";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import NavItem from "./NavItem";

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "space-evenly",
    display: "flex"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  image: { height: 84, margin: theme.spacing(1) }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <HideOnScroll>
      <AppBar>
        <Toolbar className={classes.root}>
          <NavItem to="description" text="תיאור" />
          <img
            src="logo.png"
            alt="logo"
            className={classes.image}
            onClick={() => scroll.scrollToTop({ duration: 500 })}
          />
          <NavItem to="dates" text="תאריכים" />
          <NavItem to="form" text="רישום" />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
