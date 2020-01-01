import { Typography } from "@material-ui/core";
import React from "react";
import MainContainer from "../SectionContainer";
import StyledButton from "../components/CallToAction";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: "25vh",
    minHeight: "95vh",
    verticalAlign: "middle"
  },
  title: {
    textAlign: "center",
    marginBottom: 30,
    color: "white",
    "-webkit-text-stroke-width": "0.5px",
    "-webkit-text-stroke-color": "black",
    "text-shadow": "2px 2px 5px black",
    fontWeight: 510
  }
}));

const Title = ({ action }) => {
  const classes = useStyles();
  return (
    <section>
      <MainContainer transparent className={classes.root}>
        <Typography variant="h2" className={classes.title}>
          גדנ"ע עוקץ
        </Typography>
        <Typography
          variant="h4"
          style={{
            marginBottom: 30,
            color: "white",
            "-webkit-text-stroke-width": "0.5px",
            "-webkit-text-stroke-color": "black",
            "text-shadow": "2px 2px 5px black",
            fontWeight: 400
          }}
        >
          ההרשמה לגדנ"ע 2020 תיפתח בקרוב
        </Typography>
        <StyledButton onClick={action}>הרשמו עכשיו</StyledButton>
      </MainContainer>
    </section>
  );
};

export default Title;
