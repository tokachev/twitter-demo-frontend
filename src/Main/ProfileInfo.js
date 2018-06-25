import React from "react";
import styled from "styled-components";
import Button from "../Button";
import CommonFollowers from "./CommonFollowers/";
import Media from "./Media/";
import { Link } from "react-router-dom";
import tickIcon from "../img/icon-tick.svg";
import locationIcon from "../img/icon-location.svg";
import linkIcon from "../img/icon-link.svg";
import joinedIcon from "../img/icon-joined.svg";

const ProfileInfo = styled.div`
  position: relative;
  top: -170px;
`;

const Avatar = styled.img`
  max-height: 200px;
  border-radius: 50%;
  margin-bottom: 13px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.span`
  font-size: 22px;
  font-weight: bold;
  line-height: 22px;
  color: #14171a;
  margin-right: 5px;
`;

const Follow = styled.div`
  margin-top: 6px;
`;

const FollowLink = styled(Link)`
  font-size: 14px;
  color: #667580;
  text-decoration: none;
  margin-right: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

const FollowsMessage = styled.span`
  font-size: 14px;
  color: #667580;
`;

const Description = styled.div`
  display: flex;
  flex-basis: 50%;
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;
  color: #14171a;
  margin-top: 20px;
  margin-bottom: 13px;
  padding-right: 24px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Icon = styled.img`
  max-height: 14px;
  margin-right: 14px;
`;

const Text = styled.span`
  font-size: 14px;
  line-height: 28px;
`;

const Site = styled.a`
  font-size: 14px;
  line-height: 28px;
  color: #1da1f2;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid #1da1f2;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const InfoButton = Button.extend`
  padding: 12px 35px;
`;

export default props => (
  <ProfileInfo>
    <Avatar src={process.env.PUBLIC_URL + "img/avatar.png"} alt="Avatar" />
    <User>
      <UserName>Every Interaction</UserName>
      <img src={tickIcon} alt="Verified" />
    </User>
    <Follow>
      <FollowLink to="/EveryInteract">@EveryInteract</FollowLink>
      <FollowsMessage>Follows you</FollowsMessage>
    </Follow>
    <Description>
      UX Design studio focussed problem solving creativity. Design to us is how
      can we make things *work* amazing.
    </Description>
    <Info>
      <Icon src={locationIcon} alt="Location" />
      <Text>London, UK</Text>
    </Info>
    <Info>
      <Icon src={linkIcon} alt="Website" />
      <Site href="#">everyinteraction.com</Site>
    </Info>
    <Info>
      <Icon src={joinedIcon} alt="Joined at" />
      <Text>Joined May 2008</Text>
    </Info>
    <Buttons>
      <InfoButton>Tweet to</InfoButton>
      <InfoButton>Message</InfoButton>
    </Buttons>
    <CommonFollowers />
    <Media />
  </ProfileInfo>
);
