import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import mediaIcon from "./icon-media.svg";

const Title = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Icon = styled.img`
  max-height: 15px;
`;

const MediaLink = styled(Link)`
  color: #1da1f2;
  font-size: 14px;
  line-height: 16px;
  padding-left: 12px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 0;
`;

const Media = styled.li`
  list-style: none;
`;

const Image = styled.img`
  max-height: 83px;

  &:hover {
    border: 1px solid #718290;
  }
`;

export default props => (
  <div>
    <Title>
      <Icon src={mediaIcon} alt="Photos and Videos" />
      <MediaLink to="/EveryInteract/media">522 Photos and videos</MediaLink>
    </Title>
    <List>
      <Media>
        <Link to="/media1">
          <Image
            src={process.env.PUBLIC_URL + "img/media-1.png"}
            alt="Media 1"
          />
        </Link>
      </Media>
      <Media>
        <Link to="/media2">
          <Image
            src={process.env.PUBLIC_URL + "img/media-2.png"}
            alt="Media 2"
          />
        </Link>
      </Media>
      <Media>
        <Link to="/media3">
          <Image
            src={process.env.PUBLIC_URL + "img/media-3.png"}
            alt="Media 3"
          />
        </Link>
      </Media>
      <Media>
        <Link to="/media4">
          <Image
            src={process.env.PUBLIC_URL + "img/media-4.png"}
            alt="Media 4"
          />
        </Link>
      </Media>
      <Media>
        <Link to="/media5">
          <Image
            src={process.env.PUBLIC_URL + "img/media-5.png"}
            alt="Media 5"
          />
        </Link>
      </Media>
      <Media>
        <Link to="/media6">
          <Image
            src={process.env.PUBLIC_URL + "img/media-6.png"}
            alt="Media 6"
          />
        </Link>
      </Media>
    </List>
  </div>
);
