import React from "react";
import MainContainer from "../../SectionContainer";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Section from "../../components/Section";
import SectionTitle from "../../SectionTitle";

const useStyles = makeStyles(theme => ({
  section: {
    "@media (max-width: 800px)": {
      marginBottom: theme.spacing(2)
    }
  }
}));

export default ({ even }) => {
  const classes = useStyles();
  return (
    <Section even={even} className={classes.section}>
      <MainContainer even={even}>
        <SectionTitle>ההרשמה לגדנ"ע עוקת תיפתח ב2020</SectionTitle>
      </MainContainer>
    </Section>
  );
};
