import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Menu = styled.div`
  border-bottom: 1px solid #e1e8ed;
  background-color: #fff;
  margin-top: 8px;
  padding-top: 16px;
  padding-bottom: 10px;
  padding-left: 8px;
`;

const MenuLink = styled(NavLink)`
  color: #1da1f2;
  font-weight: bold;
  text-align: left;
  font-size: 18px;
  line-height: 21px;
  margin-right: 16px;
  text-decoration: none;

  &.active {
    color: #000;
  }

  &:hover {
    text-decoration: underline;
  }

  &.active:hover {
    text-decoration: none;
  }
`;

export default ({ user }) => (
  <Menu>
    <MenuLink exact to={`/${user.login}`}>
      Tweets
    </MenuLink>
    <MenuLink exact to={`/${user.login}/with_replies`}>
      Tweets & replies
    </MenuLink>
    <MenuLink exact to={`/${user.login}/media`}>
      Media
    </MenuLink>
  </Menu>
);
