import React from 'react'
import styled from 'styled-components'
const Header = () => {
  return (
    <Container>
        <Left>
<img src='Logo.png' />
        </Left>
        <Right>

        </Right>
    </Container>
  )
}

export default Header

const Container = styled.div`
height : 20%;
width:100%;
display:flex;

`
const Left = styled.div`
heght:100%;
width:50%;
display:flex;

`
const Right = styled.div``