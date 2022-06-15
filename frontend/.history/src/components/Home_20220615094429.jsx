import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <First>
        <div className="first1">You are Built Diffrent !!</div>
        <div className="first2">
          Take your first step towards your <b>Dream Physique</b>
        </div>
      </First>
      <Second>
        <div className="features">
          Features of our Gym:
          <li>Top of the line Equipments</li>
          <li>24x7 Open</li>
          <li>Dedicated Gym Trainer</li>
          <li>Personal Diet Plan</li>
        </div>
      </Second>
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
position relative;
.features{

    background-image:url("GymHome4.jpg")
    filter: blur(8px);
    -webkit-filter: blur(8px);
}
    `;
