import Container from "@material-ui/core/Container";
import React from "react";
import bg1 from "./images/1.jpeg";
import bg2 from "./images/2.jpeg";
import TitleSection from "./TitleSection";
import DescriptionSection from "./sections/Description";
import Requirements from "./sections/Requirements";
import Dates from "./sections/Dates";
import QuestionsAndAnswers from "./sections/QuestionsAndAnswers";
import Form from "./sections/Form";
import BackgroundSlider from "react-background-slider";

const Body = () => (
  <div style={{ textAlign: "center" }}>
    <BackgroundSlider images={[bg1, bg2]} duration={5} transition={2} />
    <video
      src="vid/gadna-oketz-video.mp4"
      muted
      autoPlay
      style={{ margin: 20, width: "93%" }}
    />
    <TitleSection />
    <DescriptionSection even={true} />
    <Dates even={false} />
    <Requirements even={true} />
    <QuestionsAndAnswers even={false} />
    <Container>PORTFOLIO</Container>
    <Form even={false} />
  </div>
);

export default Body;
