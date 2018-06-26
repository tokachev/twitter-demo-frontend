import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import Recommendation from './Recommendation';
import peopleIcon from '../../img/icon-people.svg';

const Wrapper = styled.div`
  margin-top: 8px;
`;

const List = styled.ul`
  padding: 19px 16px;
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

const RecommendLink = styled (NavLink)`
  font-size: 13px;
  line-height: 15px;
  color: #1da1f2;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const FindPeople = styled.div`
  display: flex;
  align-items: center;
`;

const FindLink = RecommendLink.extend`
  margin-left: 10px;
`;

const recommendations = [
  {
    avatar: 'avatar-1',
    name: 'AppleInsider',
    login: 'appleinsider',
    verified: false,
  },
  {
    avatar: 'avatar-2',
    name: 'Creode',
    login: 'Creode',
    verified: true,
  },
  {
    avatar: 'avatar-3',
    name: 'Epiphany Search',
    login: 'EpiphanySearch',
    verified: false,
  },
];

export default () => (
  <Wrapper>
    <List>
      <Title>
        <Text>
          Who to follow
        </Text>
        <Separator>
          •
        </Separator>
        <RecommendLink to="/recomendations">
          Refresh
        </RecommendLink>
        <Separator>
          •
        </Separator>
        <RecommendLink to="/recomendations/all">
          View All
        </RecommendLink>
      </Title>
      {recommendations.map (recommendation => (
        <Recommendation
          avatar={recommendation.avatar}
          name={recommendation.name}
          login={recommendation.login}
          verified={recommendation.verified}
        />
      ))}
      <FindPeople>
        <img src={peopleIcon} alt="Find people you know" />
        <FindLink to="/find">
          Find people you know
        </FindLink>
      </FindPeople>
    </List>
  </Wrapper>
);
