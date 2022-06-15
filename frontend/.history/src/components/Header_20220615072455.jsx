import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <Container>
      <Left>
        <img src="Logo.png" />
        <p>Built Differrent</p>
      </Left>
      <Right></Right>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 17vh;
  width: 100%;
  display: flex;
  border: 2px solid black;
`;
const Left = styled.div`
  height: 100%;
  padding: 0 2rem;
  width: 50%;
  display: flex;
  border: 2px solid black;
  flex-direction: column;
  align-items: left;

  img {
    height: 1000%;
    width: 20%;
  }
`;
const Right = styled.div``;
