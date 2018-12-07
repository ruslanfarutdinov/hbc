import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Toolbar from '../components/Toolbar';
import Employees from '../components/Employees';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  render() {
    let isMobile = window.innerWidth < 440 || window.innerHeight < 420;
    
    return (
      <MainContainer>
        <Header isMobile={isMobile}/>
        <Toolbar isMobile={isMobile}/>
        <Employees isMobile={isMobile}/>
      </MainContainer>
    );
  }
}

export default App;
