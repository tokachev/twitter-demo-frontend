import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import followersIcon from "./img/icon-followers.svg";

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

export default props => (
  <CommonFollowers>
    <Title>
      <Icon src={followersIcon} alt="Followers you now" />
      <FollowersLink to="/EveryInteract/common_followers">
        6 Followers you now
      </FollowersLink>
    </Title>
    <List>
      <Follower>
        <Link to="/follower1">
          <Avatar
            src={process.env.PUBLIC_URL + "img/follower-1.png"}
            alt="Follower 1"
          />
        </Link>
      </Follower>
      <Follower>
        <Link to="/follower2">
          <Avatar
            src={process.env.PUBLIC_URL + "img/follower-2.png"}
            alt="Follower 2"
          />
        </Link>
      </Follower>
      <Follower>
        <Link to="/follower3">
          <Avatar
            src={process.env.PUBLIC_URL + "img/follower-3.png"}
            alt="Follower 3"
          />
        </Link>
      </Follower>
      <Follower>
        <Link to="/follower4">
          <Avatar
            src={process.env.PUBLIC_URL + "img/follower-4.png"}
            alt="Follower 4"
          />
        </Link>
      </Follower>
      <Follower>
        <Link to="/follower5">
          <Avatar
            src={process.env.PUBLIC_URL + "img/follower-5.png"}
            alt="Follower 5"
          />
        </Link>
      </Follower>
      <Follower>
        <Link to="/follower6">
          <Avatar
            src={process.env.PUBLIC_URL + "img/follower-6.png"}
            alt="Follower 6"
          />
        </Link>
      </Follower>
    </List>
  </CommonFollowers>
);
