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

const button = ({id, handleShowNYPairs, handleGenerateNewPair, handleShowDublinPairs, msg}) => {
  let clickHandler;
  if (id === 1) {
    clickHandler = handleShowNYPairs;
  } else if (id === 2) {
    clickHandler = handleGenerateNewPair;
  } else if (id === 3) {
    clickHandler = handleShowDublinPairs;
  }
  
  return (
    <Div>
      <Button onClick={clickHandler}>{msg}</Button>
    </Div>
  );
}


export default button;
