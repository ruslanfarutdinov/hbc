import React from 'react';
import styled from 'styled-components';

const MobileDiv = styled.div`
  margin: 5px auto;
  padding: 5px;
  border: 2px solid #999999;
  border-radius: 4px;
  background-color: #ccc;
  width: 70%;
`;

const DesktopDiv = styled.div`
  margin: 10px 10px;
  padding: 0 5px;
  border: 2px solid #999999;
  border-radius: 4px;
  background-color: #ccc;
  width: 290px;
`;

const employee = ({giver, receiver, count, isMobile}) => {
  if (isMobile) {
    return (
      <MobileDiv>
        <p>Pair {count}</p>
        <p>
          {giver.name.first} {giver.name.last} from {giver.location} {giver.department} & {receiver.name.first} {receiver.name.last} from {receiver.location} {receiver.department}.
        </p>
        <p>
          {giver.name.first}'s motto in life is "{giver.motto}", whereas {receiver.name.first}'s is "{receiver.motto}."
        </p>
      </MobileDiv>
    );
  } else {
    return (
      <DesktopDiv>
        <p>Pair {count}</p>
        <p>
          {giver.name.first} {giver.name.last} from {giver.location} {giver.department} & {receiver.name.first} {receiver.name.last} from {receiver.location} {receiver.department}.
        </p>
        <p>
          {giver.name.first}'s motto in life is "{giver.motto}", whereas {receiver.name.first}'s is 
          "{receiver.motto}."
        </p>
      </DesktopDiv>
    );
  }
}

export default employee;
