import Container from "@material-ui/core/Container";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import bg1 from "./images/k9/1.jpeg";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import TitleSection from "./TitleSection";
import DescriptionSection from "./sections/Description";
import Requirements from "./sections/Requirements";
import Dates from "./sections/Dates";
import QuestionsAndAnswers from "./sections/QuestionsAndAnswers";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Form from "./sections/Form";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px"
  }
});

const Body = () => (
  <div style={{ textAlign: "center" }}>
    <Carousel showThumbs={false} showIndicators={false}>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          zIndex: 0,
          backgroundImage: `url(${bg1})`
        }}
      />
    </Carousel>
    <Container style={{ minHeight: 600 }}>VIDEO</Container>
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
