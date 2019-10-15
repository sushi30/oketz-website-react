import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";
import MainContainer from "./SectionContainer";

const TitleSection = ({ even }) => (
  <section>
    <MainContainer even={even}>
      <Typography variant="h1" style={{ textAlign: "center" }}>
        גדנ"ע עוקץ 2019
      </Typography>
      <Typography variant="h4">ההרשמה פתוחה</Typography>
      <Button variant="contained" color="primary">
        הרשמה
      </Button>
    </MainContainer>
  </section>
);

export default TitleSection;
