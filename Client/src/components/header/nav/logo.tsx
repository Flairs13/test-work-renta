import React from 'react';
import styled from "styled-components/macro";

const Logo = () => {
    return (
        <LogoWrapper>
            <Line/>
            <Line/>
            <Line/>
        </LogoWrapper>
    );
};

export default Logo;

const LogoWrapper = styled.div`
  width: 70px;
  height: 17px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`

const Line = styled.div`
  background-color: var(--main-colorRed);
  width: 14px;
`