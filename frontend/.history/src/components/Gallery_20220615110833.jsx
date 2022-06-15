import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Gallery = () => {
  return (
    <Carousel>
      <div>
        <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwZXF1aXBtZW50fGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://c1.wallpaperflare.com/preview/339/488/34/fitness-studio-fitness-sport-train-gym.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-657495548-1527710829.jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Gallery;
