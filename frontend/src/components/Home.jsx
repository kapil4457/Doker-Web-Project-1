import React from "react";
import styled from "styled-components";
import Gallery from "./Gallery.jsx";
import TransformationCarousel from "./TransformationCarousel.jsx";
const Home = () => {
  return (
    <>
      <First id="third">
        <div className="first1">You are Built Diffrent !!</div>
        <div className="first2">
          Take your first step towards your <b>Dream Physique</b>
        </div>
      </First>
      <Second id="second">
        <div className="featuresBackground"></div>
        <div className="features">
          <h1>Features of our Gym </h1>
          <li>Top of the line Equipments</li>
          <li>24x7 Open</li>
          <li>Dedicated Gym Trainer</li>
          <li>Personal Diet Plan</li>
        </div>
      </Second>
      <GalleryCarousal>
        <h1 id="gallery">Gallery</h1>
        <Gallery />
      </GalleryCarousal>
      <AboutUs>
        <h1>About Us</h1>
        <div className="cont">
          <p>
            We are one of the <b>leading</b> Gyms in India.
            <br />
            <br />
            We have helped <b>thousands of people</b> to achieve their{" "}
            <b>dream physique</b> .
          </p>
          <Carousal>
            <TransformationCarousel />
          </Carousal>
        </div>
      </AboutUs>
      <ContactUs></ContactUs>
    </>
  );
};

export default Home;

const First = styled.div`
  height: 86vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .first1 {
    font-size: 7rem;
    background: linear-gradient(to right, #30cfd0 0%, #330867 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    text-transform: uppercase;
  }
  .first2 {
    font-size: 2rem;
    b {
      font-weight: 900;
      color: red;
    }
  }
`;

const Second = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;

  .features {
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
    color: white;
    font-weight: bold;
    border: 3px solid #f1f1f1;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 80%;
    padding: 20px;
    height: 30vh;
    text-align: left;
    h1 {
        
        text-align: center;
        font-size: 4rem;
        font-weight: 500;
        text-al
    }
    li {
        padding-left: 33rem;
      font-size: 2rem;
      font-weight: 500;
    }
  }
  .featuresBackground {
    background-image: url("GymHome.jpg");
    width: 100%;
    height: 100%;
    filter: blur(8px);
    -webkit-filter: blur(8px);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const GalleryCarousal = styled.div`
  height: 101vh;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  h1 {
    width: 100%;
    height: 20%;
    text-align: center;
    font-size: 5rem;
    font-weight: 500;
    text-shadow: 0.2pc 0.2pc 0.2pc gray;
  }
`;

const AboutUs = styled.div`
  height: 105vh;
  width: 100%;

  .cont {
    display: grid;
    grid-template-columns: 45% 55%;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    padding: 2rem;
    p {
      padding: 1rem;
      font-size: 2.5rem;
    }
  }
  h1 {
    width: 100%;
    text-align: left;
    padding-left: 5rem;
    padding-top: 4rem;
    font-weight: 500;
    font-size: 5.5rem;
    text-shadow: 0.3pc 0.3pc 0.3pc gray;
  }
`;

const Carousal = styled.div`
  box-shadow: 0pc 0pc 0.5pc gray;
`;
const ContactUs = styled.div``;
