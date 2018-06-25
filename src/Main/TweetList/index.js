import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Tweet from "./Tweet";
import SitePreview from "./SitePreview";

const TweetList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

const LargeText = styled.p`
  font-size: 25px;
  line-height: 30px;
  font-weight: 100;
  margin-top: 0px;
  margin-bottom: 17px;
`;

const SmallText = styled.p`
  font-size: 16px;
  line-height: 22px;
  margin-top: 0px;
  margin-bottom: 8px;
`;

const TweetTag = styled.span`
  color: #1da1f2;
`;

const TweetLink = styled.a`
  color: #1da1f2;
  text-decoration: none;
  &:hover {
    border-bottom: 2px solid #1da1f2;
  }
`;

const TweetImage = styled.img`
  max-width: 100%;
`;

export default props => (
  <div>
    <Menu />
    <TweetList>
      <Tweet
        username="Every Interaction"
        login="EveryInteract"
        date="2 Mar 2015"
        retweets={17}
        loves={47}
        liked={true}
        pinned={true}
      >
        <LargeText>
          We’ve made some more resources for all you wonderful{" "}
          <TweetTag>#design</TweetTag> folk{" "}
          <TweetLink href="a">everyinteraction.com/resources/</TweetLink>{" "}
          <TweetTag>#webdesign</TweetTag> <TweetTag>#UI</TweetTag>
        </LargeText>
        <TweetImage
          src={process.env.PUBLIC_URL + "img/tweet-image.png"}
          alt="Tweet Image"
        />
      </Tweet>
      <Tweet
        username="Every Interaction"
        login="EveryInteract"
        date="23h"
        comments={1}
        retweets={4}
        loves={1}
        liked={false}
        pinned={false}
      >
        <SmallText>
          Our new website concept; Taking you from… @ Every Interaction{" "}
          <TweetLink href="a">instagram.com/p/BNFGrfhBP3M/</TweetLink>
        </SmallText>
      </Tweet>
      <Tweet
        username="Every Interaction"
        login="EveryInteract"
        date="Nov 18"
        liked={false}
        pinned={false}
      >
        <SmallText>
          Variable web fonts are coming, and will open a world of opportunities
          for weight use online
        </SmallText>
        <SitePreview />
      </Tweet>
    </TweetList>
  </div>
);
