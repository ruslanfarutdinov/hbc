import React from 'react';
import styled from 'styled-components';
import Employee from './Employee';

const MainDiv = styled.div`
  margin: 10px auto;
  width: 60%;
  min-width: 325px;
  max-width: 830px;
  border: 2px solid #858585;
  border-radius: 4px;
  color: green;
  display: flex;
`;

const InnerDiv = styled.div`
  margin: 70px auto 70px auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const employees = () => {
  return (
    <MainDiv>
      <InnerDiv>
        <Employee>test 1</Employee>
        <Employee>test 2</Employee>
        <Employee>test 3</Employee>
        <Employee>test 4</Employee>
        <Employee>test 5</Employee>
        <Employee>test 6</Employee>
        <Employee>test 7</Employee>
        <Employee>test 8</Employee>
      </InnerDiv>
    </MainDiv>
  );
};

export default employees;
