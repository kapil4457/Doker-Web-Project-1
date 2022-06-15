import React from "react";
import styled from "styled-components";

const Pricing = () => {
  return (
    <>
      <Container>
        <Regular>
          <h1>Regular Membership</h1>
          <div>
            <h2>Features</h2>
            <li>24X7 Access</li>
            <li>Diet Planning</li>
          </div>
          <div className="pricing1">1000/- per Month</div>
        </Regular>
        <Coach>
          <h1>Premium Membership</h1>
          <div>
            <h2>Features</h2>
            <li>24X7 Access</li>
            <li>Diet Planning</li>
            <li>Personal Coach</li>
          </div>
          <div className="pricing1">1000/- per Month</div>
        </Coach>
      </Container>
    </>
  );
};

export default Pricing;
const Container = styled.div``;
const Regular = styled.div``;
const Coach = styled.div``;
