import React from 'react';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import PersonalPage from './PersonalPage';

const NotFound = () => (
  <React.Fragment>
    <Helmet>
      <title>
        404 Not Found
      </title>
    </Helmet>
    <h1>
      404 Not Found
    </h1>
  </React.Fragment>
);

const Template = ({ location }) => (
  <React.Fragment>
    <Helmet>
      <title>
        {location.pathname.substr(1)}
      </title>
    </Helmet>
    <h1>
      {location.pathname.substr(1)}
    </h1>
  </React.Fragment>
);

export default () => (
  <BrowserRouter>
    <React.Fragment>
      <Helmet>
        <title>
          Twitter
        </title>
      </Helmet>
      <Switch>
        <Redirect exact from="/" to="/EveryInteract" />
        <Route path="/moments" component={Template} />
        <Route path="/notifications" component={Template} />
        <Route path="/settings" component={Template} />
        <Route path="/messages" component={Template} />
        <Route path="/:user" component={PersonalPage} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);
