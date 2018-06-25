import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import commentsIcon from "./img/icon-comments.svg";
import retweetsIcon from "./img/icon-retweet.svg";
import lovesIcon from "./img/icon-loves.svg";
import lovesRedIcon from "./img/icon-loves-red.svg";
import envelopeIcon from "./img/icon-envelope.svg";
import pinnedIcon from "./img/icon-pinned.svg";

const Avatar = styled.img`
  height: 50px;
  weight: 50px;
  border-radius: 50%;
  margin-bottom: 13px;
  margin-top: 10px;
  margin-left: 16px;
`;

const Tweet = styled.div`
  display: flex;
  border-bottom: 1px solid #e1e8ed;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const UserName = styled.span`
  font-weight: bold;
  margin-right: 4px;
`;

const UserLogin = styled(Link)`
  font-size: 14px;
  color: #667580;
  text-decoration: none;
  margin-right: 4px;

  &:hover {
    border-bottom: 1px solid #667580;
  }
`;

const TweetDate = styled.span`
  font-size: 14px;
  color: #667580;
`;

const Content = styled.div`
  padding-right: 11px;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 25%;
`;

const ActionIcon = styled.img`
  max-height: 14px;
  margin-right: 11px;
`;

const ActionLove = styled(ActionIcon)`
  color: ${props => (props.liked === "true" ? "red" : "white")};
`;

const ActionNumber = styled.span`
  font-size: 13px;
  line-height: 15px;
  color: #667580;
`;

const LovesNumber = ActionNumber.extend`
  color: #e32b51;
`;

const PinnedMessage = styled.span`
  margin-left: 16px;
  color: #707e88;
  font-size: 12px;
  line-height: 14px;
`;

const Pinned = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-left: 48px;
`;

export default props => (
  <div>
    {props.pinned && (
      <Pinned>
        <img src={pinnedIcon} alt="Pinned Tweet" />
        <PinnedMessage>Pinned Tweet</PinnedMessage>
      </Pinned>
    )}
    <Tweet>
      <Avatar src={process.env.PUBLIC_URL + "img/avatar.png"} alt="Avatar" />
      <div className="col-xs">
        <UserInfo>
          <UserName>{props.username}</UserName>
          <UserLogin to="/EveryInteract">@{props.login}</UserLogin>
          <TweetDate>• {props.date}</TweetDate>
        </UserInfo>
        <Content>{props.children}</Content>
        <Actions>
          <Action>
            <ActionIcon src={commentsIcon} alt="Comments" />
            <ActionNumber>{props.comments}</ActionNumber>
          </Action>
          <Action>
            <ActionIcon src={retweetsIcon} alt="Retweets" />
            <ActionNumber>{props.retweets}</ActionNumber>
          </Action>
          {props.liked ? (
            <Action>
              <ActionLove src={lovesRedIcon} alt="Loves" />
              <LovesNumber>{props.loves}</LovesNumber>
            </Action>
          ) : (
            <Action>
              <ActionLove src={lovesIcon} alt="Loves" />
              <ActionNumber>{props.loves}</ActionNumber>
            </Action>
          )}
          <Action>
            <ActionIcon src={envelopeIcon} alt="Envelope" />
          </Action>
        </Actions>
      </div>
    </Tweet>
  </div>
);
