import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Trend from './Trend';

const Wrapper = styled.div`
  margin-top: 8px;
  margin-bottom: 24px;
`;

const List = styled.ul`
  padding-top: 19px;
  padding-right: 16px;
  padding-bottom: 47px;
  padding-left: 16px;
  background-color: #fff;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Text = styled.h4`
  margin: 0;
`;

const Separator = styled.span`
  margin-left: 5px;
  margin-right: 5px;
`;

const ChangeLink = styled(NavLink)`
  font-size: 13px;
  line-height: 15px;
  color: #1da1f2;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const trends = [
  { name: '#BringYouDogToWorkToday' },
  { name: '#FridayFeeling', count: 12.100 },
  {
    name: '#BrexiAnniversary',
    description: "It's one year since the UK voated to leave European Union",
  },
  { name: 'HMS Queen Elizabeth', count: 1.036 },
  { name: 'Joe Budden', count: 1.036 },
  { name: 'Trident', count: 6.136 },
];

export default () => (
  <Wrapper>
    <List>
      <Title>
        <Text>
United Kindow Trends
        </Text>
        <Separator>
•
        </Separator>
        <ChangeLink to="/change_trends">
Change
        </ChangeLink>
      </Title>
      {trends.map(trend => (
        <Trend
          name={trend.name}
          count={trend.count}
          description={trend.description}
        />
      ))}
    </List>
  </Wrapper>
);
