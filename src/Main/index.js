import React from "react";
import styled from "styled-components";
import ProfileStat from "./ProfileStat";
import TweetList from "./TweetList/";
import ProfileInfo from "./ProfileInfo";
import OfferSidebar from "./OfferSidebar/";

const Main = styled.div`
  position: absolute;
  top: 390px;
  left: 0px;
  right: 0px;
  background-color: #f5f8fa;
`;

export default () => (
  <Main>
    <ProfileStat />
    <div className="container">
      <div className="row">
        <div className="col-xs-3">
          <ProfileInfo />
        </div>
        <div className="col-xs-6">
          <TweetList />
        </div>
        <div className="col-xs-3">
          <OfferSidebar />
        </div>
      </div>
    </div>
  </Main>
);
