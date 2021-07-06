import React, {useEffect, useRef} from 'react';
import Burger from "./burger";
import Basket from "./basket";
import styled from "styled-components/macro";
import Logo from "./logo";
import {Container} from "../../../style-components/style-components";


const Nav:React.FC = () => {
    const refWrapper = useRef<HTMLDivElement>(null)
    const refNav = useRef<HTMLDivElement>(null)
    const prevScrollCount = useRef<number>(window.pageYOffset)
    const giveHeightNav = () => {
        if (refWrapper.current && refNav.current){
            if (window.pageYOffset >= 350){
                refWrapper.current.style.top = '-' + refWrapper.current.clientHeight + 'px'
                refNav.current.style.height = '55px'
            } else {
                refNav.current.style.height = '88px'
            }
            if (window.pageYOffset < prevScrollCount.current){
                refWrapper.current.style.top = '0px'
            }
            prevScrollCount.current = window.pageYOffset
        }
    }

    useEffect(() => {
        document.addEventListener('scroll',giveHeightNav)
        return () => document.removeEventListener("scroll", giveHeightNav)
    },[])

    return (
        <>
            <NavWrapper ref={refWrapper}>
                <Container>
                    <Wrapper ref={refNav}>
                        <Burger/>
                        <Logo/>
                        <Basket/>
                    </Wrapper>
                </Container>
            </NavWrapper>
            <NavTransparent/>
        </>

    );
};

export default Nav;

const NavWrapper = styled.nav`
  padding: 0 10px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 10;
  transition: top 0.2s ease-out;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  height: 88px;
  transition: height 0.5s ease;
`
const NavTransparent = styled.div`
  height: 88px;
`