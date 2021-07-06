import React from 'react';
import styled from 'styled-components/macro';
import FooterLogo from "./footer-logo";
import Sections from "./sections/sections";
import {Container} from "../../style-components/style-components";
import Social from "./social";

const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <FooterLogo/>
                <Sections/>
                <Social/>
            </Container>
        </FooterWrapper>
    );
};

export default Footer;

const FooterWrapper = styled.footer`
  
`