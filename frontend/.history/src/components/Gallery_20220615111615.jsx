import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Gallery = () => {
  return (
    <Container>
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
          <p className="legend">Cardio</p>
        </div>
      </Carousel>
    </Container>
  );
};

export default Gallery;

const Container = styled.div`
  height: 80%;

  img {
    // width: 100;
    height: 70vh;
  }
`;