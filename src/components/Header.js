import React from 'react';
import styled from 'styled-components';

const MobileDiv = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #757575;
  color: white;
  font-size: 20px;
  height: 40px;
`;

const DesktopDiv = styled.div`
  border: 2px solid #757575;
  border-radius: 4px;
  background-color: #757575;
  color: white;
  font-size: 20px;
  margin: auto;
  width: 60%;
  min-width: 375px;
  max-width: 830px;
  height: 40px;
`;

const Text = styled.p`
  margin: 10px 0;
  text-align: center;
`;

const msg = 'WELCOME TO COFFEE WEEK';

const header = ({isMobile}) => {
  if (isMobile) {
    return (
      <MobileDiv>
        <Text>{msg}</Text>
      </MobileDiv>
    );
  } else {
    return (
      <DesktopDiv>
        <Text>{msg}</Text>
      </DesktopDiv>
    );
  }
};

export default header;
