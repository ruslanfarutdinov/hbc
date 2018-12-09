import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: auto;
`;

const Button = styled.button`
  background-color: #008CBA;
  color: white;
  height: 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const button = ({handleGenerateNewPair, msg}) => (
  <Div>
    <Button onClick={handleGenerateNewPair}>{msg}</Button>
  </Div>
);

export default button;
