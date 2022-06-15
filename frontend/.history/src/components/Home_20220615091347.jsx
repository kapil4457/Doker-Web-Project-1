import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <First>
        <div className="first1">You are Built Diffrent !!</div>
        <div className="first2">
          Take your first step towards your dream physique
        </div>
      </First>
      <Second>
        <div>
          We will help you with your dream transformation and be with you
          forever..
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
  }
`;
