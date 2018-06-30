import React from 'react';
import styled from 'styled-components';
import ProfileStat from './ProfileStat';
import Tweets from './Tweets';
import ProfileInfo from './ProfileInfo';
import OfferSidebar from './OfferSidebar';

const Main = styled.div`
  position: absolute;
  top: 390px;
  left: 0px;
  right: 0px;
  background-color: #f5f8fa;
`;

export default ({ user }) => (
  <Main>
    <ProfileStat />
    <div className="container">
      <div className="row">
        <div className="col-xs-3">
          <ProfileInfo user={user} />
        </div>
        <div className="col-xs-6">
          <Tweets user={user} />
        </div>
        <div className="col-xs-3">
          <OfferSidebar />
        </div>
      </div>
    </div>
  </Main>
);
