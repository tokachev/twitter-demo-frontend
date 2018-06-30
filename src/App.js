import React from 'react';
import { Helmet } from 'react-helmet';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import Header from './Header';
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
      {location.search}
    </h1>
  </React.Fragment>
);

export default () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Redirect exact from="/" to="/EveryInteract" />
        <Route path="/moments" component={Template} />
        <Route path="/notifications" component={Template} />
        <Route path="/settings" component={Template} />
        <Route path="/messages" component={Template} />
        <Route path="/about" component={Template} />
        <Route path="/help" component={Template} />
        <Route path="/terms" component={Template} />
        <Route path="/privacy" component={Template} />
        <Route path="/cookies" component={Template} />
        <Route path="/ads" component={Template} />
        <Route path="/search" component={Template} />
        <Route path="/find_people" component={Template} />
        <Route path="/:user" component={PersonalPage} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);
