import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Left>
        <img src="Logo.png" />
      </Left>
      <Center>Bale Bale Gym</Center>
      <Right>
        <NavLink>Home</NavLink>
      </Right>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 17vh;
  width: 100%;
  display: flex;
  box-shadow: 0.4pc 0.4pc 1pc black;
`;
const Left = styled.div`
  height: 100%;
  padding: 0 2rem;
  width: 50%;
  display: flex;

  img {
    height: 100%;
    width: 20%;
  }
`;
const Center = styled.div``;
const Right = styled.div``;
