import React from "react";
import PersonalPage from "./PersonalPage";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const App = () => (
  <div>
    <Helmet>
      <title>Twitter</title>
    </Helmet>
    <Router>
      <div>
        <Route path="/EveryInteract" component={PersonalPage} />
        <Redirect from="/" to="/EveryInteract" />
      </div>
    </Router>
  </div>
);

export default App;
