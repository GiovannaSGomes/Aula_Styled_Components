import React from 'react';
import styled from 'styled-components';

const Nav = styled.div` 
background-color:#F6D1CC;
position: relative;
display: flex;
justify-content: space-around;
width: 100 %;
height: 60px;
`
const Item = styled.p`
    font-size: 14px
    font-family: 'Read';
    font-weight: bold;
    color:#C25D66;
    margin-left: 30px;
    margin-right:30px;
`
export default function header() {
    return (
        <Nav>
            <Item>Home </Item>
            <Item>Sobre </Item>
            <Item>Contato </Item>

        </Nav>

    );
}