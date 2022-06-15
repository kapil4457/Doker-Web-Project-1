import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Gallery = () => {
  return (
    <Carousel>
      <div>
        <img src="./Gym1.jpeg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="./Gym2.jpeg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="Gym3.jpeg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Gallery;
