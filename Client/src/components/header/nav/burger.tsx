import React from 'react';
import styled from "styled-components/macro";

const Burger = () => {
    return (
        <BurgerWrapper>
            <BurgerLine/>
            <BurgerLine width={'62%'}/>
            <BurgerLine/>
        </BurgerWrapper>
    );
};

export default Burger;

const BurgerWrapper = styled.div`
  width: 16px;
  height: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
`
const BurgerLine = styled.div<{width?: string}>`
  width: ${props => props.width || '100%'};
  height: 2px;
  background-color: black;
`