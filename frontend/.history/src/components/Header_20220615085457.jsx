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
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/plans">Plans</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </Right>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 14vh;
  width: 100%;
  display: flex;
  background-color: black;
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
    font-size: 3.5rem;
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
  justify-content: space-evenly;
  align-items: center;
  a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
  }
`;
