import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import "flexboxgrid2";
import "normalize.css";
import Header from "./Header";
import Main from "./Main/";

const UserProfileImage = styled.img`
  height: 100%;
  width: 100%;
`;

const PersonalPage = () => (
  <div>
    <Helmet>
      <title>Every Interaction</title>
    </Helmet>
    <Header />
    <div>
      <UserProfileImage
        src={process.env.PUBLIC_URL + "img/cover-image.png"}
        alt="User Background"
      />
    </div>
    <Main />
  </div>
);

export default PersonalPage;
