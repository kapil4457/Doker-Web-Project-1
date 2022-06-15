import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <Container>
      <Left>
        <img src="Logo.png" />
        <p>Build Differrent</p>
      </Left>
      <Right></Right>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 13vh;
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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  img {
    height: 100%;
    width: 20%;
  }
`;
const Right = styled.div``;
