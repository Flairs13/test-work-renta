import styled, {keyframes} from "styled-components/macro";

export const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
`

export const Gradient = keyframes`
    0%{
      background-position: 0 10%;
    }
    50%{
       background-position: 0 100%;
    }
    100%{
       background-position: 0 10%;
    }
`;

export const WrapperPreloader = styled.div`
  background: linear-gradient(51deg, rgb(215,215,215) 0%, rgba(255,255,255,1) 20%, rgb(201,200,200) 100%); 
  background-size: 150% 460%;
  animation: ${Gradient} 2.2s linear infinite;;
  border-radius: 4px;
  text-align: center;
`