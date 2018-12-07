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
`;

const button = () => (
  <Div>
    <Button>GENERATE NEW PAIRS</Button>
  </Div>
);

export default button;
