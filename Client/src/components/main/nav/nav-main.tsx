import React, {useEffect, useRef} from 'react';
import {category} from "../../../redux/item/item-reducer";
import styled, { keyframes } from "styled-components/macro";
import cn from "classnames";
import {Container, Gradient, WrapperPreloader} from "../../../style-components/style-components";
import {useSelector} from "react-redux";
import {getActiveProductCategory} from "../../../redux/item/item-select";
type PropsType = {
    categories: Array<category>
    status: string
}

const NavMain:React.FC<PropsType> = ({categories,status}) => {
    const refNavMainWrapper = useRef<HTMLDivElement>(null)
    const wrapperOffsetTop = useRef(0)
    const refTransparentBlock = useRef<HTMLDivElement>(null)
    const prevScrollCount = useRef<number>(window.pageYOffset)
    const activeProductCategory = useSelector(getActiveProductCategory)
    const scrollHandler = () => {
        if (refNavMainWrapper.current && refTransparentBlock.current){
            if (window.pageYOffset >= refNavMainWrapper.current.offsetTop && refNavMainWrapper.current.offsetTop !== 0){
                if (wrapperOffsetTop.current === 0){
                    wrapperOffsetTop.current = refNavMainWrapper.current.offsetTop
                }
                refNavMainWrapper.current.style.position = 'fixed'
                refNavMainWrapper.current.style.marginTop = '0'
                refTransparentBlock.current.style.display = 'block'
            }
            if (wrapperOffsetTop.current > window.pageYOffset + refNavMainWrapper.current.clientHeight){
                refNavMainWrapper.current.style.position = 'static'
                refTransparentBlock.current.style.display = 'none'
                refNavMainWrapper.current.style.marginTop = '65px'
            }
        }
        if (window.pageYOffset < prevScrollCount.current && refNavMainWrapper.current){
            refNavMainWrapper.current.style.top = '55px'
        } else if (refNavMainWrapper.current) {
            refNavMainWrapper.current.style.top = '0px'
        }
        prevScrollCount.current = window.pageYOffset
    }

    const navMainRender = (status:string) => {
        switch (status) {
            case 'loading': {
                return (
                    <NavWrapperPreloader/>
                )
            }
            case 'complete': {
                return (
                    <NavList>
                        {categories.map((i) => {
                            return (
                                <NavItem className={cn({'is-active': i.name.en === activeProductCategory})} key={i._id}>
                                    <a className={cn({'is-active': i.name.en === activeProductCategory})} href={'#' + i.name.en}>{i.name.rus}</a>
                                </NavItem>
                            )
                        })}
                    </NavList>
                )
            }
        }
    }

    useEffect(() => {
        document.addEventListener('scroll',scrollHandler)
        return () => document.removeEventListener("scroll", scrollHandler)
    },[])

    return (
        <>
            <NavMainWrapper ref={refNavMainWrapper}>
                <Container>
                    {navMainRender(status)}
                </Container>
            </NavMainWrapper>
            <NavMainWrapperTransparent ref={refTransparentBlock}/>
        </>

    );
};

export default NavMain;

const NavMainWrapper = styled.nav`
  margin-top: 80px;
  position: static;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid var(--main-colorFill);
  background-color: white;
  z-index: 9;
  transition: top 0.2s ease;
  overflow-x: auto;
`
const NavMainWrapperTransparent = styled.div`
  height: 50px;
  display: none;
  margin-top: 55px;
`
const NavList = styled.ul`
  display: flex;
  padding: 0 10px;
`
const NavItem = styled.li`
  a {
  padding: 10px 0;
  color: var(--main-colorGray);
    :hover {
       color: var(--main-colorRed);
    }
    &.is-active {
       color: var(--main-colorRed);
    }
  }
  padding: 10px 0;
  font-size: 18px;
  line-height: 24px;
  margin-right: 40px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.5s ease;
  :last-child {
    margin-right: 0;
  }
  :hover {
    border-bottom: 2px solid var(--main-colorRed);
  }
  &.is-active {
       border-bottom: 2px solid var(--main-colorRed);
    }
`

const NavWrapperPreloader = styled(WrapperPreloader)`
  background-size: 150% 460%;
  min-height: 50px;
`