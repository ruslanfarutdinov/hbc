import React from 'react';
import styled from 'styled-components';

import Employee from './Employee';

const MobileDiv = styled.div`
  margin: 30px auto 50px auto;
  display: flex;
  flex-direction: column;
`;

const DesktopDiv = styled.div`
  margin: 10px auto;
  width: 60%;
  min-width: 375px;
  max-width: 830px;
  border: 2px solid #858585;
  border-radius: 4px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DesktopInnerDiv = styled.div`
  margin: 10px auto 50px auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Heading = styled.h2`
  margin: 10px auto;
`;

const employees = ({isMobile, nyRandomized, dublinRandomized}) => {
  const nyPairs = nyRandomized.map((pair, i) => <Employee 
    giver={pair.giver} receiver={pair.receiver} key={pair.giver.guid} isMobile={isMobile}/>);

  const dublinPairs = dublinRandomized.map((pair, i) => <Employee 
    giver={pair.giver} receiver={pair.receiver} key={pair.giver.guid} isMobile={isMobile}/>);

  const nyHeading = nyPairs.length > 0 ? <Heading>New York</Heading> : null;
  const dublinHeading = dublinPairs.length > 0 ? <Heading>Dublin</Heading> : null;

  if (isMobile) {
    return (
      <MobileDiv>
        {nyHeading}
        {nyPairs}
        {dublinHeading}
        {dublinPairs}
      </MobileDiv>
    );
  }  

  return (
    <DesktopDiv>
      {nyHeading}
      <DesktopInnerDiv>
        {nyPairs}
      </DesktopInnerDiv>
      {dublinHeading}
      <DesktopInnerDiv>
        {dublinPairs}
      </DesktopInnerDiv>
    </DesktopDiv>
  );
};

export default employees;
