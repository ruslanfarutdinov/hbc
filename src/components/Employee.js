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
  const text = (
    <div>
      <p>
        {giver.name.first} {giver.name.last} from {giver.location} {giver.department} gifts coffee to {receiver.name.first} {receiver.name.last} from {receiver.location} {receiver.department}.
      </p>
      <p>
        {receiver.name.first}'s motto in life is "{receiver.motto}."
      </p>
      <p>
        Email: {receiver.email} / Phone: {receiver.phone}.
      </p> 
    </div>
  );

  if (isMobile) {
    return (
      <MobileDiv>
        {text}
      </MobileDiv>
    );
  } else {
    return (
      <DesktopDiv>
        {text}
      </DesktopDiv>
    );
  }
}

export default employee;
