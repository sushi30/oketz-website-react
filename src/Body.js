import React from "react";
import TitleSection from "./TitleSection";
import DescriptionSection from "./sections/Description";
import Requirements from "./sections/Requirements";
import Dates from "./sections/Dates";
import QuestionsAndAnswers from "./sections/QuestionsAndAnswers";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Form from "./sections/Form";
import BackgroundCarousel from "./CarouselBackground";
import Portfolio from "./sections/Portfolio/Portfolio";
import Video from "./Video";

const Body = () => (
  <div style={{ textAlign: "center" }}>
    <BackgroundCarousel />
    <Video />
    <TitleSection />
    <DescriptionSection even={true} />
    <Dates even={false} />
    <Requirements even={true} />
    <QuestionsAndAnswers even={false} />
    <Portfolio even={true} />
    <Form even={false} />
  </div>
);

export default Body;
