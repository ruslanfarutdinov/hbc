import React from 'react';
import styled from 'styled-components';

import Employee from './Employee';

const MobileDiv = styled.div`
  margin: 50px auto 50px auto;
  display: flex;
  flex-direction: column;
`;

const DesktopDiv = styled.div`
  margin: 10px auto;
  width: 60%;
  min-width: 325px;
  max-width: 830px;
  border: 2px solid #858585;
  border-radius: 4px;
  color: black;
  display: flex;
`;

const DesktopInnerDiv = styled.div`
  margin: 70px auto 70px auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const employees = ({isMobile, randomizedPairs}) => {
  if (isMobile) {
    return (
      <MobileDiv>
        {randomizedPairs.map((pair, i) => <Employee 
          giver={pair.giver} receiver={pair.receiver} count={i+1} key={pair.giver.guid}
          isMobile={isMobile}/>)}
      </MobileDiv>
    );
  } else {
    return (
      <DesktopDiv>
        <DesktopInnerDiv>
          {randomizedPairs.map((pair, i) => <Employee 
            giver={pair.giver} receiver={pair.receiver} count={i+1} key={pair.giver.guid}/>)}
        </DesktopInnerDiv>
      </DesktopDiv>
    );
  }
};

export default employees;
