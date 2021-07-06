import React, {useState} from 'react';
import styled from 'styled-components/macro';
import Nav from "./nav/nav";
import Delivery from "./delivery/delivery";
import {Container} from "../../style-components/style-components";

const Header = () => {
    console.log('Render Header')
    return (
        <HeaderWrapper>
            <Container>
                <Nav/>
                <Delivery/>
            </Container>
        </HeaderWrapper>
    );
};

export default Header;

const HeaderWrapper = styled.header`

`