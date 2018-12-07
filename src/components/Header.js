import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: 2px solid #757575;
  border-radius: 4px;
  background-color: #757575;
  color: white;
  font-size: 20px;
  margin: auto;
  width: 60%;
  min-width: 325px;
  max-width: 830px;
  height: 40px;
`;

const Text = styled.p`
  margin: 10px 0;
  text-align: center;  
`;

const header = () => (
  <Div>
    <Text>WELCOME TO COFFEE WEEK</Text>
  </Div>
);

export default header;
