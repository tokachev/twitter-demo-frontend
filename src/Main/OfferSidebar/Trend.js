import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Trend = styled.li`
  list-style: none;
  line-height: 20px;
  margin-bottom: 10px;
`;

const Name = styled(Link)`
  color: #1da1f2;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  padding-bottom: 4px;

  &:hover {
    text-decoration: underline;
  }
`;

const Description = styled.p`
  color: #667580;
  font-size: 13px;
  margin: 0;
`;

const TweetsCount = styled.span`
  color: #667580;
  font-size: 13px;
`;

export default ({ name, description, count }) => (
  <Trend>
    <Name to={`/search?q=${name}`}>
      {name}
    </Name>
    <Description>
      {description}
    </Description>
    {count && (
      <TweetsCount>
        {count}
        Tweets
      </TweetsCount>
    )}
    {' '}
  </Trend>
);
