import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Left>
        <img src="logo1.png" />
      </Left>
      <Center>
        <p>Mad Fitness Gym</p>
      </Center>
      <Right>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About Us</NavLink>
        <NavLink to="/">Plans</NavLink>
        <NavLink to="/">Contact Us</NavLink>
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
  padding: 0 5rem;
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
    font-family: roboto;
    font-size: 3rem;
    text-shadow: 0.2pc 0.2pc 0.2pc gray;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Right = styled.div`
  height: 100%;
  padding: 0 2rem;
  display: flex;
  width: 33%;
`;
