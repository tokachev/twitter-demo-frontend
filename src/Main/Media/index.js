import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import mediaIcon from './icon-media.svg';

const Title = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const Icon = styled.img`
  max-height: 15px;
`;

const MediaLink = styled (Link)`
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

const medias = [
  {
    to: '/media1',
    src: `${process.env.PUBLIC_URL}img/media-1.png`,
    alt: 'Media 1',
  },
  {
    to: '/media2',
    src: `${process.env.PUBLIC_URL}img/media-2.png`,
    alt: 'Media 2',
  },
  {
    to: '/media3',
    src: `${process.env.PUBLIC_URL}img/media-3.png`,
    alt: 'Media 3',
  },
  {
    to: '/media4',
    src: `${process.env.PUBLIC_URL}img/media-4.png`,
    alt: 'Media 4',
  },
  {
    to: '/media5',
    src: `${process.env.PUBLIC_URL}img/media-5.png`,
    alt: 'Media 5',
  },
  {
    to: '/media6',
    src: `${process.env.PUBLIC_URL}img/media-6.png`,
    alt: 'Media 6',
  },
];

export default () => (
  <div>
    <Title>
      <Icon src={mediaIcon} alt="Photos and Videos" />
      <MediaLink to="/EveryInteract/media">
        522 Photos and videos
      </MediaLink>
    </Title>
    <List>
      {medias.map (media => (
        <Media>
          <Link to={media.to}>
            <Image src={media.src} alt={media.alt} />
          </Link>
        </Media>
      ))}
    </List>
  </div>
);
