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

const mockData = [
  {
    person1: {
      first: 'Brennan',
      last: 'Jackson',
      department: 'Engineering',
      location: 'New York',
      motto: 'Distributed discrete superstructure',
      guid: 'd20c20ab-5813-48d4-8148-dee37530a1ec',
    }, 
    person2: {
      first: 'Michael',
      last: 'Nieson',
      department: 'Human Resources',
      location: 'Dublin',
      motto: 'Self-enabling fault-tolerant product',
      guid: '1886e6fb-bac5-44dd-be1a-748a246f9c91',
    },
  }, 
  {
    person1: {
      first: 'Brennan',
      last: 'Jackson',
      department: 'Engineering',
      location: 'New York',
      motto: 'Distributed discrete superstructure',
      guid: 'd20c20ab-5813-48d4-8148-dee37530a1ec',
    }, 
    person2: {
      first: 'Michael',
      last: 'Nieson',
      department: 'Human Resources',
      location: 'Dublin',
      motto: 'Self-enabling fault-tolerant product',
      guid: '1886e6fb-bac5-44dd-be1a-748a246f9c91',
    },
  }, 
  {
    person1: {
      first: 'Brennan',
      last: 'Jackson',
      department: 'Engineering',
      location: 'New York',
      motto: 'Distributed discrete superstructure',
      guid: 'd20c20ab-5813-48d4-8148-dee37530a1ec',
    }, 
    person2: {
      first: 'Michael',
      last: 'Nieson',
      department: 'Human Resources',
      location: 'Dublin',
      motto: 'Self-enabling fault-tolerant product',
      guid: '1886e6fb-bac5-44dd-be1a-748a246f9c91',
    },
  },
  {
    person1: {
      first: 'Brennan',
      last: 'Jackson',
      department: 'Engineering',
      location: 'New York',
      motto: 'Distributed discrete superstructure',
      guid: 'd20c20ab-5813-48d4-8148-dee37530a1ec',
    }, 
    person2: {
      first: 'Michael',
      last: 'Nieson',
      department: 'Human Resources',
      location: 'Dublin',
      motto: 'Self-enabling fault-tolerant product',
      guid: '1886e6fb-bac5-44dd-be1a-748a246f9c91',
    },
  }, 
  {
    person1: {
      first: 'Brennan',
      last: 'Jackson',
      department: 'Engineering',
      location: 'New York',
      motto: 'Distributed discrete superstructure',
      guid: 'd20c20ab-5813-48d4-8148-dee37530a1ec',
    }, 
    person2: {
      first: 'Michael',
      last: 'Nieson',
      department: 'Human Resources',
      location: 'Dublin',
      motto: 'Self-enabling fault-tolerant product',
      guid: '1886e6fb-bac5-44dd-be1a-748a246f9c91',
    },
  },
  {
    person1: {
      first: 'Brennan',
      last: 'Jackson',
      department: 'Engineering',
      location: 'New York',
      motto: 'Distributed discrete superstructure',
      guid: 'd20c20ab-5813-48d4-8148-dee37530a1ec',
    }, 
    person2: {
      first: 'Michael',
      last: 'Nieson',
      department: 'Human Resources',
      location: 'Dublin',
      motto: 'Self-enabling fault-tolerant product',
      guid: '1886e6fb-bac5-44dd-be1a-748a246f9c91',
    },
  }
]

const employees = ({isMobile}) => {
  if (isMobile) {
    return (
      <MobileDiv>
        {mockData.map((pair, i) => <Employee 
          person1={pair.person1} person2={pair.person2} count={i+1} key={pair.person1.guid}
          isMobile={isMobile}/>)}
      </MobileDiv>
    );
  } else {
    return (
      <DesktopDiv>
        <DesktopInnerDiv>
          {mockData.map((pair, i) => <Employee 
            person1={pair.person1} person2={pair.person2} count={i+1} key={pair.person1.guid}/>)}
        </DesktopInnerDiv>
      </DesktopDiv>
    );
  }
};

export default employees;
