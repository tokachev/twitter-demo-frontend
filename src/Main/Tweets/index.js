import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import TweetList from './TweetList';

export default ({ user }) => (
  <Switch>
    <Route
      exact
      path={`/${user.login}`}
      render={() => (
        <React.Fragment>
          <Menu user={user} />
          <TweetList user={user} />
        </React.Fragment>
      )}
    />
    <Route
      exact
      path={`/${user.login}/following`}
      render={() => (
        <h2>
Following
        </h2>
      )}
    />
    <Route
      exact
      path={`/${user.login}/followers`}
      render={() => (
        <h2>
Followers
        </h2>
      )}
    />
    <Route
      exact
      path={`/${user.likes}/likes`}
      render={() => (
        <h2>
Likes
        </h2>
      )}
    />
    <Route
      exact
      path={`/${user.lists}/lists`}
      render={() => (
        <h2>
Lists
        </h2>
      )}
    />
  </Switch>
);
