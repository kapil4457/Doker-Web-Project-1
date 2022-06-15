import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Gallery = () => {
  return (
    <Carousel>
      <div>
        <img src="https://img.wallpapersafari.com/desktop/1440/900/59/86/dH7fgl.jpg" />
        <p className="legend">Weights</p>
      </div>
      <div>
        <img src="https://images.hdqwalls.com/download/gym-women-image-1920x1080.jpg" />
        <p className="legend">Gymnasium</p>
      </div>
      <div>
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-657495548-1527710829.jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Gallery;
