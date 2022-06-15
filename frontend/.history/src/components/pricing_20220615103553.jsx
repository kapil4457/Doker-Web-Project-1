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
          <div className="pricing1">1000 per MOnth</div>
        </Regular>
        <Coach></Coach>
      </Container>
    </>
  );
};

export default Pricing;
const Container = styled.div``;
const Regular = styled.div``;
const Coach = styled.div``;
