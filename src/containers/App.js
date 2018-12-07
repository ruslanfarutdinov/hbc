import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Toolbar from '../components/Toolbar';
import Employees from '../components/Employees';

const MainContainer = styled.div`
  color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
`;

class App extends Component {
  render() {
    return (
      <MainContainer>
        <Header/>
        <Toolbar/>
        <Employees/>
      </MainContainer>
    );
  }
}

export default App;
