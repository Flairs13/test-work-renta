import React from 'react';
import styled from "styled-components/macro";

const FooterLogo = () => {
    return (
        <LogoWrapper>
            <Line/>
            <Line/>
            <Line/>
        </LogoWrapper>
    );
};

export default FooterLogo;

const LogoWrapper = styled.div`
  width: 160px;
  height: 72px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`

const Line = styled.div`
  background-color: var(--main-colorRed);
  width: 32px;
  height: 100%;
`