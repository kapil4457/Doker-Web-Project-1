import React from "react";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const TransformationCarousel = () => {
  return (
    <Container>
      <Carousel>
        <div className="car">
          <img src="https://assets.gqindia.com/photos/5dc162026cce8200089fc9f2/4:3/w_1439,h_1079,c_limit/How%20to%20lose%20weight%20like%20this%20guy%20who%20lost%2033%20kgs%20to%20look%20as%20fit%20as%20Superman%20for%20his%20daughter.jpg" />
        </div>
        <div className="car">
          <img src="https://static.india.com/wp-content/uploads/2021/06/utsav-ghosh.jpg" />
        </div>
        <div className="car">
          <img src="https://cdn2.fittr.com/static/images/transformations/inspiring-story-of-a-mom-who-lost-50-kgs.jpg" />
        </div>
        <div className="car">
          <img src="https://i.insider.com/5dfb95e7954bda322262d3c2?width=1080&format=jpeg" />
        </div>
        <div className="car">
          <img src="https://www.healthsanta.com/wp-content/uploads/2021/09/1632597733_maxresdefault.jpg" />
        </div>
      </Carousel>
    </Container>
  );
};

export default TransformationCarousel;

const Container = styled.div`
  height: 80%;

  .car {
    img {
      height: 70vh;
    }
  }
`;
