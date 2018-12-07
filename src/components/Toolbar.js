import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Div = styled.div`
  border: 2px solid #757575;
  border-radius: 4px;
  background-color: #757575
  color: white;
  margin: 10px auto;
  width: 60%;
  min-width: 325px;
  max-width: 830px;
  height: 40px;
  display: flex;
`;

const toolbar = () => (
  <Div>
    <Button/>
  </Div>
);

export default toolbar;
