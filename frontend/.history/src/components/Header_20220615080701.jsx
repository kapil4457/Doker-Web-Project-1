import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Left>
        <img src="Logo.png" />
      </Left>
      <Center>
        <p>Mad Fitness Gym</p>
      </Center>
      <Right>
        <NavLink to="/">Home</NavLink>
      </Right>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 14vh;
  width: 100%;
  display: flex;
  box-shadow: 0.4pc 0.4pc 1pc black;
`;
const Left = styled.div`
  height: 100%;
  padding: 0 2rem;
  display: flex;
  width: 33%;
  img {
    height: 100%;
    width: 20%;
  }
`;
const Center = styled.div`
  height: 100%;
  padding: 0 2rem;
  display: flex;
  width: 33%;
  p {
    height: 100%;
    text-align: center;
  }
`;
const Right = styled.div`
  height: 100%;
  padding: 0 2rem;
  display: flex;
  width: 33%;
`;
