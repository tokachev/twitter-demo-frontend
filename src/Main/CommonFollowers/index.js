import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
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

const FollowersLink = styled (Link)`
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

const followers = [
  {
    to: '/follower1',
    src: `${process.env.PUBLIC_URL}img/follower-1.png`,
    alt: 'Follower 1',
  },
  {
    to: '/follower2',
    src: `${process.env.PUBLIC_URL}img/follower-2.png`,
    alt: 'Follower 2',
  },
  {
    to: '/follower3',
    src: `${process.env.PUBLIC_URL}img/follower-3.png`,
    alt: 'Follower 3',
  },
  {
    to: '/follower4',
    src: `${process.env.PUBLIC_URL}img/follower-4.png`,
    alt: 'Follower 4',
  },
  {
    to: '/follower5',
    src: `${process.env.PUBLIC_URL}img/follower-5.png`,
    alt: 'Follower 5',
  },
  {
    to: '/follower6',
    src: `${process.env.PUBLIC_URL}img/follower-6.png`,
    alt: 'Follower 6',
  },
];

export default () => (
  <CommonFollowers>
    <Title>
      <Icon src={followersIcon} alt="Followers you now" />
      <FollowersLink to="/EveryInteract/common_followers">
        6 Followers you now
      </FollowersLink>
    </Title>
    <List>
      {followers.map (follower => (
        <Follower>
          <Link to={follower.to}>
            <Avatar src={follower.src} alt={follower.alt} />
          </Link>
        </Follower>
      ))}
    </List>
  </CommonFollowers>
);
