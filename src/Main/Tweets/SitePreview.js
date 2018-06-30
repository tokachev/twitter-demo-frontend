import React from 'react';
import styled from 'styled-components';

const SitePreview = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e1e8ed;
  border-radius: 4px;
`;

const PreviewImage = styled.img`
  height: 126px;
  margin-right: 9px;
`;

const Site = styled.a`
  color: #657786;
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid #657786;
  }
`;

const PreviewHeader = styled.span`
  font-weight: bold;
`;

const PreviewText = styled.p`
  font-size: 15px;
  line-height: 22px;
  margin: 0;
`;

const PreviewContent = styled.div``;

export default ({ data }) => (
  <SitePreview>
    <PreviewImage
      src={`${process.env.PUBLIC_URL}img/${data.image}`}
      alt="preview"
    />
    <PreviewContent>
      <PreviewHeader>
        {data.header}
      </PreviewHeader>
      <PreviewText>
        {data.text}
      </PreviewText>
      <Site href="#">
        {data.site}
      </Site>
    </PreviewContent>
  </SitePreview>
);
