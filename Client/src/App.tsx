import React from 'react'
import styled from 'styled-components/macro'
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";

const App:React.FC = () => {
  return (
      <AppWrapper>
        <Header/>
        <Main/>
        <Footer/>
      </AppWrapper>
  );
};

const AppWrapper = styled.div`
  padding: 0 10px;
`


export default App;
