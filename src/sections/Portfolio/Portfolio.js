import React from "react";
import MainContainer from "../../SectionContainer";
import Photo from "./Photo";
import img2 from "../../images/2.jpeg";
import Grid from "@material-ui/core/Grid";

export default ({ even }) => (
  <section>
    <MainContainer even={even}>
      <Grid>
        <Grid item md={4} xs={12}>
          <Photo src={img2} />
        </Grid>
      </Grid>
    </MainContainer>
  </section>
);
