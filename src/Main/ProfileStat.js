import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import moreIcon from "../img/icon-more.svg";
import Button from "../Button";

const ProfileStat = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 2px #b0b8be;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const StatTab = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 11px 15px 8px 15px;
  font-size: 12px;
  line-height: 21px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &.active {
    border-bottom: 3px solid #1da1f2;
  }
`;

const Title = styled.span`
  color: #707e88;
`;

const Value = styled.span`
  font-size: 18px;
  color: #1da1f2;
`;

const FollowButton = Button.extend`
  color: #1da1f2;
  background-color: #fff;
  border: 1px solid #1da1f2;
  line-height: 16px;
  padding: 9px 27px;
  margin-top: 11px;
  margin-right: 18px;
`;

const More = styled.img`
  margin-top: 11px;
  cursor: pointer;
`;

export default () => (
  <ProfileStat>
    <div className="container">
      <div className="row">
        <div className="col-xs-offset-3 col-xs-4">
          <div className="row">
            <StatTab exact to="/EveryInteract">
              <Title>Tweets</Title>
              <Value>8,058</Value>
            </StatTab>
            <StatTab exact to="/EveryInteract/following">
              <Title>Following</Title>
              <Value>721</Value>
            </StatTab>
            <StatTab exact to="/EveryInteract/followers">
              <Title>Followers</Title>
              <Value>1,815</Value>
            </StatTab>
            <StatTab exact to="/EveryInteract/likes">
              <Title>Likes</Title>
              <Value>460</Value>
            </StatTab>
            <StatTab exact to="/EveryInteract/lists">
              <Title>Lists</Title>
              <Value>2</Value>
            </StatTab>
          </div>
        </div>
        <div className="col-xs-5">
          <div className="end-xs middle-xs">
            <FollowButton>Follow</FollowButton>
            <More src={moreIcon} alt="More" />
          </div>
        </div>
      </div>
    </div>
  </ProfileStat>
);
