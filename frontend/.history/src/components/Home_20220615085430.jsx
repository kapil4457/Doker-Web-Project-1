import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <First>
      <img src="GymHome2.jpg" alt="" />
    </First>
  );
};

export default Home;

const First = styled.div`
  height: 86vh;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;
