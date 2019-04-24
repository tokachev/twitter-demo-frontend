import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Recommendation from './Recommendation';
import recommendations from '../../data/recommendations';
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

const RecommendLink = styled(NavLink)`
  font-size: 13px;
  line-height: 15px;
  color: #1da1f2;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Refresh = styled.a`
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
        <Refresh>
Refresh
        </Refresh>
        <Separator>
•
        </Separator>
        <RecommendLink to="/recommendations">
View All
        </RecommendLink>
      </Title>
      {recommendations.map(recommendation => (
        <Recommendation
          avatar={recommendation.avatar}
          name={recommendation.name}
          login={recommendation.login}
          verified={recommendation.verified}
        />
      ))}
      <FindPeople>
        <img src={peopleIcon} alt="Find people you know" />
        <FindLink to="/find_people">
Find people you know
        </FindLink>
      </FindPeople>
    </List>
  </Wrapper>
);
