import React from "react";
import styled from "styled-components";

const Pricing = () => {
  return (
    <>
      <Container>
        <Regular>
          <h1 className="head">Regular Membership</h1>
          <div classname="feature1">
            <h2>Features</h2>
            <li>24X7 Access</li>
            <li>Diet Planning</li>
          </div>
          <div className="pricing1">1000/- per Month</div>
        </Regular>
        <Coach>
          <h1>Premium Membership</h1>
          <div classname="feature2">
            <h2>Features</h2>
            <li>24X7 Access</li>
            <li>Diet Planning</li>
            <li>Personal Coach</li>
          </div>
          <div className="pricing1">2000/- per Month</div>
        </Coach>
      </Container>
    </>
  );
};

export default Pricing;
const Container = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  gap: 5rem;
  align-items: center;
  justify-content: center;
`;
const Regular = styled.div`
  border: 2px solid black;
  padding: 2rem;
  height: 100%;
  .head {
    font-size: 3rem;
  }
`;
const Coach = styled.div`
  height: 100%;
  border: 2px solid black;
  padding: 2rem;
  .head {
    font-size: 3rem;
  }
  h1 {
    font-size: 3rem;
  }
`;
