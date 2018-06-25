import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getYear } from "date-fns";

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  jusstify-content: space-between;
  font-size: 13px;
  line-height: 18px;
`;

const Copyright = styled.span`
  color: #718290;
  padding-right: 8px;
`;

const InfoLink = styled(Link)`
  color: #718290;
  text-decoration: none;
  padding-right: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

export default props => (
  <Info>
    <Copyright>© {getYear(new Date())} Twiiter</Copyright>
    <InfoLink to="/about">About</InfoLink>
    <InfoLink to="/help">Help Center</InfoLink>
    <InfoLink to="/terms">Terms</InfoLink>
    <InfoLink to="/privacy">Privacy policy</InfoLink>
    <InfoLink to="/cookies">Cookies</InfoLink>
    <InfoLink to="/ads">Ads info</InfoLink>
  </Info>
);
