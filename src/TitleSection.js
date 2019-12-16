import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React from "react";
import MainContainer from "./SectionContainer";

const TitleSection = ({ even }) => (
  <section>
    <MainContainer transparent style={{ paddingTop: 100, paddingBottom: 100 }}>
      <Typography
        variant="h1"
        style={{
          textAlign: "center",
          marginBottom: 30,
          color: "white",
          "-webkit-text-stroke-width": "0.5px",
          "-webkit-text-stroke-color": "black",
          "text-shadow": "2px 2px 5px black"
        }}
      >
        גדנ"ע עוקץ 2019
      </Typography>
      <Typography variant="h4" style={{ marginBottom: 30 }}>
        ההרשמה פתוחה
      </Typography>
      <Button variant="contained" color="primary">
        הרשמה
      </Button>
    </MainContainer>
  </section>
);

export default TitleSection;
