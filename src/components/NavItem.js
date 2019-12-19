import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-scroll";

const useStyles = makeStyles(theme => ({
  root: { cursor: "pointer" }
}));

export default function NavItem({ to, text }) {
  const classes = useStyles();

  return (
    <Link to="form" smooth="true">
      <Typography variant="body1" className={classes.root}>
        {text}
      </Typography>
    </Link>
  );
}
