import React from 'react';
import styled from 'styled-components/macro';

const Section = () => {
    return (
        <SectionWrapper>
            <SectionTitle>Раздел 1</SectionTitle>
            <SubSection>Подраздел</SubSection>
            <SubSection>Подраздел</SubSection>
            <SubSection>Подраздел</SubSection>
            <SubSection>Подраздел</SubSection>
            <SubSection>Подраздел</SubSection>
        </SectionWrapper>
    );
};

export default Section;

const SectionWrapper = styled.li`
  
`

const SectionTitle = styled.h1`
  font-size: 32px;
  line-height: 40px;
  font-weight: 400;
  margin-bottom: 23px;
   @media(max-width: 550px){
      font-size: 18px;
      line-height: 26px;
  }
`

const SubSection = styled.a`
  display: block;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 16px;
  :last-child {
    margin-bottom: 0;
  }
  @media(max-width: 550px){
      font-size: 12px;
      line-height: 18px;
  }
`