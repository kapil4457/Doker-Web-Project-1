import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <First>
      <div>You are Built Diffrent!!</div>
      <div>Take your first step towards your dream</div>
    </First>
  );
};

export default Home;

const First = styled.div`
  height: 86vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direciton: row;
`;
