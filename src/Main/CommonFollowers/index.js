import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import followers from '../../data/followers';
import followersIcon from './img/icon-followers.svg';

const CommonFollowers = styled.div`
  margin-bottom: 32px;
`;

const Title = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Icon = styled.img`
  max-height: 15px;
`;

const FollowersLink = styled(Link)`
  color: #1da1f2;
  font-size: 14px;
  line-height: 16px;
  padding-left: 12px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 0;
`;

const Follower = styled.li`
  list-style: none;
`;

const Avatar = styled.img`
  max-height: 48px;

  &:hover {
    border: 1px solid #718290;
  }
`;

export default ({ user }) => (
  <CommonFollowers>
    <Title>
      <Icon src={followersIcon} alt="Followers you now" />
      <FollowersLink to={`/${user.login}/common-followers`}>
        6 Followers you now
      </FollowersLink>
    </Title>
    <List>
      {followers.map(follower => (
        <Follower>
          <Link to={`/${follower.login}`}>
            <Avatar src={`${process.env.PUBLIC_URL}img/${follower.avatar}`} alt={follower.name} />
          </Link>
        </Follower>
      ))}
    </List>
  </CommonFollowers>
);
