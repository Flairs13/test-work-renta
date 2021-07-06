import React from 'react';
import styled from 'styled-components/macro';
import Section from "./section";

const Sections = () => {
    return (
        <SectionWrapper>
            <SectionList>
                <Section/>
                <Section/>
                <Elipse/>
                <Section/>
                <Section/>
            </SectionList>
        </SectionWrapper>
    );
};

export default Sections;

const SectionWrapper = styled.section`
   margin-top: 70px;
    @media(max-width: 490px){
      margin-top: 40px;
  }
`
const SectionList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
  li:nth-of-type(3),
  li:nth-of-type(4) {
    margin-left: auto;
  }
   @media(max-width: 780px){
      grid-template-columns: repeat(4,1fr);
  }
`
const Elipse = styled.div`
  background-color: var(--main-colorGray);
  border-radius: 50%;
  width: 227px;
  height: 227px;
  margin: 0 auto;
   @media(max-width: 780px){
      display: none;
  }
`