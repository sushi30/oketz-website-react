import { Typography } from "@material-ui/core";
import React from "react";
import MainContainer from "../SectionContainer";
import Section from "../components/Section";

export default ({ even }) => (
  <Section even={even}>
    <MainContainer even={even}>
      <Typography variant="h5">רישומך נקלטה. תודה.</Typography>
    </MainContainer>
  </Section>
);
