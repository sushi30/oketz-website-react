import React from "react";
import Title from "./sections/Title";
import DescriptionSection from "./sections/Description";
import Requirements from "./sections/Requirements";
import Dates from "./sections/Dates";
import QuestionsAndAnswers from "./sections/QuestionsAndAnswers";
import Form from "./sections/Form";
import BackgroundCarousel from "./CarouselBackground";
import Portfolio from "./sections/Portfolio/Portfolio";
import Video from "./Video";
import Scroller, { Element } from "react-scroll";

const callToAction = () =>
  Scroller.scroller.scrollTo("form", {
    duration: 1000,
    delay: 50,
    smooth: true
  });

const Body = () => (
  <div style={{ textAlign: "center" }}>
    <BackgroundCarousel />
    <Video />
    <Title action={callToAction} />
    <DescriptionSection even={true} action={callToAction} />
    <Dates even={false} />
    <Requirements even={true} />
    <QuestionsAndAnswers even={false} />
    <Portfolio even={true} />
    <Element name="form">
      <Form even={true} />
    </Element>
  </div>
);

export default Body;
