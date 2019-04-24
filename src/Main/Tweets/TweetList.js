import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Tweet from './Tweet';
import tweets from '../../data/tweets';

const TweetList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

export default ({ user }) => (
  <Switch>
    <Route
      exact
      path={`/${user.login}`}
      render={() => (
        <TweetList>
          {tweets.map(tweet => (
            <Tweet
              date={tweet.date}
              retweets={tweet.retweets}
              comments={tweet.comments}
              loves={tweet.loves}
              pinned={tweet.pinned}
              largeText={tweet.largeText}
              text={tweet.text}
              image={tweet.image}
              preview={tweet.preview}
              user={user}
            />
          ))}
        </TweetList>
      )}
    />
    <Route
      path={`/${user.login}/with_replies`}
      render={() => (
        <h2>
Tweets and replies
        </h2>
      )}
    />
    <Route
      path={`/${user.login}/media`}
      render={() => (
        <h2>
Media
        </h2>
      )}
    />
  </Switch>
);
