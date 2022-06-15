import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <First>
      <div className="first1">You are Built Diffrent!!</div>
      <div className="first2">Take your first step towards your dream</div>
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
  flex-direction: column;
`;
