import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../Button';
import tickIcon from '../../img/icon-tick.svg';
import deleteIcon from '../../img/icon-delete.svg';

const Recommendation = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  border-bottom: 1px solid #e6ecf0;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  height: 48px;
  weight: 48px;
  margin-bottom: 25px;
`;

const Follow = styled.div`
  overflow: hidden;
  padding-left: 12px;
`;

const Account = styled(Link)`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: bold;
  color: #000;
  line-height: 15px;
  margin-right: 2px;

  &:hover {
    text-decoration: underline;
  }
`;

const Login = styled.span`
  font-size: 13px;
  line-height: 15px;
  color: #14171a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 2px;
`;

const FollowButton = Button.extend`
  color: #1da1f2;
  background-color: #fff;
  border: 1px solid #1da1f2;
  line-height: 16px;
  padding: 9px 27px;
  margin-top: 9px;
  margin-bottom: 16px;
`;

const Delete = styled.img`
  position: relative;
  bottom: 25px;
  cursor: pointer;
  padding-left: 26px;
  padding-right: 17px;
`;

export default ({
  avatar, name, verified, login,
}) => (
  <Recommendation>
    <Avatar
      src={`${process.env.PUBLIC_URL}img/${avatar}`}
      alt={name}
    />
    <Follow>
      <Account to="#">
        <Name>
          {name}
        </Name>
        {verified && <img src={tickIcon} alt="Verified" />}
        <Login>
        @
          {login}
        </Login>
      </Account>
      <FollowButton>
      Follow
      </FollowButton>
    </Follow>
    <Delete src={deleteIcon} alt="Delete Recommendation" />
  </Recommendation>
);
