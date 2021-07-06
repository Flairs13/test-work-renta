import React, {useEffect, useLayoutEffect} from 'react';
import NavMain from "./nav/nav-main";
import {useDispatch, useSelector} from "react-redux";
import { getItem } from '../../redux/item/item-action';
import {getCategories, getStatus} from '../../redux/item/item-select';
import {category} from "../../redux/item/item-reducer";
import MainSection from "./main-section/main-section";
import styled from "styled-components";
import {Container} from "../../style-components/style-components";


const Main = () => {
    const dispatch = useDispatch()
    const categories: Array<category> = useSelector(getCategories)
    const status = useSelector(getStatus)
    useEffect(() => {
        dispatch(getItem())
    },[])
    return (
        <MainWrapper>
            <Container>
                <NavMain status={status} categories={categories}/>
            </Container>
            <MainSection status={status} categories={categories}/>
        </MainWrapper>
    );
};

export default Main;

const MainWrapper = styled.main`
  
`