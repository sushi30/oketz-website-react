import React from "react";
import MainContainer from "../../SectionContainer";
import Photo from "./Photo";
import img2 from "../../images/k9/2.jpeg";
import img5 from "../../images/k9/5.jpeg";
import img7 from "../../images/k9/7.jpeg";
import img8 from "../../images/k9/8.jpeg";
import img9 from "../../images/k9/9.jpeg";
import img10 from "../../images/k9/10.jpeg";
import Grid from "@material-ui/core/Grid";
import Section from "../../components/Section";

export default ({ even }) => (
  <Section even={even}>
    <MainContainer maxWidth="xl" noPadding disableGutters even={even}>
      <Grid container spacing={0}>
        {[img2, img5, img7, img8, img9, img10].map(src => (
          <Grid item md={4} xs={12} style={{ marginBottom: -4 }}>
            <Photo src={src} style={{ width: "100%" }} />
          </Grid>
        ))}
      </Grid>
    </MainContainer>
  </Section>
);
