import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import SolidButton from './Button';
import homeIcon from './img/icon-home.svg';
import momentsIcon from './img/icon-moments.svg';
import notificationsIcon from './img/icon-notifications.svg';
import messagesIcon from './img/icon-messages.svg';
import twitterLogo from './img/twitter-logo.svg';
import magnifierIcon from './img/icon-magnifier.svg';

const Header = styled.header`
  padding-top: 6px;
  padding-bottom: 7px;
`;

const Navigation = styled.div`
  background-color: #ffffff;
  margin-top: 8px;
  margin-bottom: 8px;
  color: #667580;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;
`;

const Icon = styled.img`
  margin-right: 6px;
`;

const Tab = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 20px;
  color: #667580;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const Text = styled.div``;

const Search = styled.input`
  background: #f5f8fa;
  background-image: url(${magnifierIcon});
  background-repeat: no-repeat;
  background-position: 95% 50%;
  border: 1px solid #f5f8fa;
  border-radius: 100px;
  padding: 9px 20px 8px 11px;
  margin-right: 18px;
  cursor: pointer;
  font-size: 12px;
  line-height: 14px;
`;

const AvatarLink = styled(NavLink)``;

const Avatar = styled.img`
  height: 27px;
  weight: 27px;
  border-radius: 50%;
  margin-right: 18px;
`;

export default () => (
  <Header>
    <div className="container">
      <div className="row middle-xs between-xs">
        <Navigation>
          <div className="row middle-xs">
            <Tab to="/">
              <Icon src={homeIcon} alt="Home" />
              <Text>
                Home
              </Text>
            </Tab>
            <Tab exact to="/moments">
              <Icon src={momentsIcon} alt="Moments" />
              <Text>
                Moments
              </Text>
            </Tab>
            <Tab exact to="/notifications">
              <Icon src={notificationsIcon} alt="Notifications" />
              <Text>
                Notifications
              </Text>
            </Tab>
            <Tab exact to="/messages">
              <Icon src={messagesIcon} alt="Messages" />
              <Text>
                Messages
              </Text>
            </Tab>
          </div>
        </Navigation>
        <div className="center-xs">
          <img src={twitterLogo} alt="Twitter logo" />
        </div>
        <div className="row middle-xs">
          <Search type="search" placeholder="Search Twitter" />
          <AvatarLink to="settings">
            <Avatar
              src={`${process.env.PUBLIC_URL}img/avatar-1.png`}
              alt="Settings"
            />
          </AvatarLink>
          <SolidButton>
            Tweet
          </SolidButton>
        </div>
      </div>
    </div>
  </Header>
);
