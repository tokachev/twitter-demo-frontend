import React from "react";
import styled from "styled-components";

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

export default () => (
  <SitePreview>
    <PreviewImage
      src={`${process.env.PUBLIC_URL}img/preview.png`}
      alt="preview"
    />
    <PreviewContent>
      <PreviewHeader>The Future of Web Fonts</PreviewHeader>
      <PreviewText>
        The Future of Web Fonts We love typefaces. They give our sites and
        applications personalized feel. They convey the information and tell a
        story. They establish information hierarchy. But they’re…
      </PreviewText>
      <Site href="#">vilijamis.com</Site>
    </PreviewContent>
  </SitePreview>
);
