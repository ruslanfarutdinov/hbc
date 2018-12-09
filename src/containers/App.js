import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Header from '../components/Header';
import Toolbar from '../components/Toolbar';
import Employees from '../components/Employees';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ny: [],
      dublin: [],
      nyRandomized: [],
      dublinRandomized: [],
      cache: {
        ny: [],
        dublin: [],
      }
    };
    
    this.handleGenerateNewPair = this.handleGenerateNewPair.bind(this);
    this.handleShowNYPairs = this.handleShowNYPairs.bind(this);
    this.handleShowDublinPairs = this.handleShowDublinPairs.bind(this);
  }

  componentDidMount() {
    let ny, nyRandomized, dublin, dublinRandomized;

    axios.get('https://hbc-frontend-challenge.hbccommon.private.hbc.com/coffee-week/users?location=ny')
      .then(response => {
        ny = response.data.users;
        nyRandomized = this.createRandomPairs(ny);
        return axios.get('https://hbc-frontend-challenge.hbccommon.private.hbc.com/coffee-week/users?location=dub')
      })
      .then(res => {
        dublin = res.data.users;
        dublinRandomized = this.createRandomPairs(dublin);
        const cache = {
          ny: nyRandomized,
          dublin: dublinRandomized,
        }
        this.setState({ny, dublin, nyRandomized, dublinRandomized, cache});
      })
      .catch(error => console.log(`Get request error. ${error}`));
  }

  createRandomPairs(employees) {
    const generateRandomIdx = () => Math.floor(Math.random() * employees.length);

    const usedIdx = Array(employees.length);
    const randomIdx = [];
    while(randomIdx.length < employees.length) {
      let idx = generateRandomIdx();
      while(usedIdx[idx]) {
        idx = generateRandomIdx();
      }
      usedIdx[idx] = true;
      randomIdx.push(idx);
    }

    const randomizedPairs = [];
    for (let i = 0; i < randomIdx.length; i += 1) {
      const giverIdx = randomIdx[i];
      let receiverIdx;

      if (i === randomIdx.length - 1) {
        receiverIdx = randomIdx[0];
      } else {
        receiverIdx = randomIdx[i + 1];      
      }
      
      const pair = {giver: employees[giverIdx], receiver: employees[receiverIdx]};
      randomizedPairs.push(pair);
    }

    return randomizedPairs;
  }

  handleGenerateNewPair() {
    const newNYRandomized = this.createRandomPairs(this.state.ny);
    const newDublinRandomized = this.createRandomPairs(this.state.dublin);
    const newCache = {
      ny: newNYRandomized,
      dublin: newDublinRandomized,
    }
    this.setState({
      nyRandomized: newNYRandomized,
      dublinRandomized: newDublinRandomized,
      cache: newCache,
    });
  }

  handleShowNYPairs() {
    this.setState({
      dublinRandomized: [],
      nyRandomized: this.state.cache.ny,
    });
  }

  handleShowDublinPairs() {
    this.setState({
      nyRandomized: [],
      dublinRandomized: this.state.cache.dublin,
    });
  }

  render() {
    let isMobile = window.innerWidth < 440 || window.innerHeight < 420;
    
    return (
      <MainContainer>
        <Header isMobile={isMobile}/>
        <Toolbar isMobile={isMobile} handleGenerateNewPair={this.handleGenerateNewPair}
          handleShowNYPairs={this.handleShowNYPairs} handleShowDublinPairs={this.handleShowDublinPairs}/>
        <Employees isMobile={isMobile} nyRandomized={this.state.nyRandomized}
          dublinRandomized={this.state.dublinRandomized}/>
      </MainContainer>
    );
  }
}

export default App;
