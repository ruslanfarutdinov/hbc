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

const employee = ({person1, person2, count, isMobile}) => {
  if (isMobile) {
    return (
      <MobileDiv>
        <p>Pair {count}</p>
        <p>
          {person1.first} {person1.last} from {person1.location} {person1.department} & {person2.first} {person2.last} from {person2.location} {person2.department}.
        </p>
        <p>
          {person1.first}'s motto in life is "{person1.motto}", whereas {person2.first}'s is 
          "{person2.motto}."
        </p>
      </MobileDiv>
    );
  } else {
    return (
      <DesktopDiv>
        <p>Pair {count}</p>
        <p>
          {person1.first} {person1.last} from {person1.location} {person1.department} & {person2.first} {person2.last} from {person2.location} {person2.department}.
        </p>
        <p>
          {person1.first}'s motto in life is "{person1.motto}", whereas {person2.first}'s is 
          "{person2.motto}."
        </p>
      </DesktopDiv>
    );
  }
}

export default employee;
