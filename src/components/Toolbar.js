import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const MobileDiv = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #757575
  color: white;
  width: 100%;
  height: 40px;
  display: flex;
`;

const DesktopDiv = styled.div`
  border: 2px solid #757575;
  border-radius: 4px;
  background-color: #757575
  color: white;
  margin: 10px auto;
  width: 60%;
  min-width: 375px;
  max-width: 830px;
  height: 40px;
  display: flex;
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;  
`;

const toolbar = ({isMobile, handleGenerateNewPair}) => {
  const buttons = (
    <ButtonDiv>
      <Button handleGenerateNewPair={handleGenerateNewPair} msg="SHOW NY PAIRS"/>
      <Button handleGenerateNewPair={handleGenerateNewPair} msg="GENERATE NEW PAIRS"/>
      <Button handleGenerateNewPair={handleGenerateNewPair} msg="SHOW DUBLIN PAIRS"/>
    </ButtonDiv>
  );

  if (isMobile) {
    return (
      <MobileDiv>
        {buttons}
      </MobileDiv>
    );
  } else {
    return (
      <DesktopDiv>
        {buttons}
      </DesktopDiv>
    );
  }
};

export default toolbar;
