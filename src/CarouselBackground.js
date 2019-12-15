import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import bg1 from "./images/k9/1.jpeg";
import bg4 from "./images/k9/4.jpeg";
import bg6 from "./images/k9/6.jpeg";
import bg1m from "./images/k9/1m.jpeg";
import bg4m from "./images/k9/4m.jpeg";
import bg6m from "./images/k9/6m.jpeg";
import Slider from "react-slick/lib";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  slide: {
    height: "100vh",
    width: "100%",
    zIndex: 0,
    backgroundPosition: "center center",
    backgroundSize: "cover"
  }
});

const Slide = ({ mobile, mobileBg, bg, className }) => (
  <div>
    <div
      className={className}
      style={{
        backgroundImage: mobile ? `url(${mobileBg})` : `url(${bg})`
      }}
    />
  </div>
);

const BackgroundCarousel = () => {
  const mobile = useMediaQuery("(max-width:600px)");
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  const slideSettings = {
    height: "100vh",
    width: "100%",
    zIndex: 0,
    backgroundPosition: "center center",
    backgroundSize: "cover"
  };
  const classes = useStyles();
  return (
    <div
      style={{
        position: "fixed",
        height: "100%",
        width: "100%",
        zIndex: -1
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          zIndex: 0,
          overflow: "hidden"
        }}
      >
        <Slider {...settings}>
          <Slide
            mobile={mobile}
            mobileBg={bg1m}
            bg={bg1}
            className={classes.slide}
          />
          <Slide
            mobile={mobile}
            mobileBg={bg4m}
            bg={bg4}
            className={classes.slide}
          />
          <Slide
            mobile={mobile}
            mobileBg={bg6m}
            bg={bg6}
            className={classes.slide}
          />
        </Slider>
      </div>
    </div>
  );
};

export default BackgroundCarousel;
