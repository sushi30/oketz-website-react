import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import bg1 from "./images/k9/1.jpeg";
import bg4 from "./images/k9/4.jpeg";
import bg6 from "./images/k9/6.jpeg";
import bg1m from "./images/k9/1m.jpeg";
import bg4m from "./images/k9/4m.jpeg";
import bg6m from "./images/k9/6m.jpeg";

const images = [[bg4, bg4m], [bg1, bg1m], [bg6, bg6m]];

const CarouselBackground = () => {
  const mobile = window.innerWidth < 600;
  return (
    <div style={{}}>
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        autoPlay={true}
      >
        {images.map(i => (
          <div>
            <img src={mobile ? i[1] : i[0]} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselBackground;
