import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 10px 10px;
  border: 2px solid #999999;
  border-radius: 4px;
  background-color: #ccc;
  width: 300px;
  min-height: 200px;
`;

const employee = (props) => <Div>{props.children}</Div>;

export default employee;
