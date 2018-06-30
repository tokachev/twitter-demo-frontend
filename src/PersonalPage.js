import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import 'flexboxgrid2';
import 'normalize.css';
import Main from './Main';
import users from './data/users';

const UserProfileImage = styled.img`
  height: 100%;
  width: 100%;
`;

export default ({ match }) => {
  const user = users.find(el => el.login === match.params.user);

  return (
    <React.Fragment>
      <Helmet>
        <title>
          {user.name}
        </title>
      </Helmet>
      <div>
        <UserProfileImage
          src={`${process.env.PUBLIC_URL}img/cover-image.png`}
          alt="User Background"
        />
      </div>
      <Main user={user} />
    </React.Fragment>
  );
};
