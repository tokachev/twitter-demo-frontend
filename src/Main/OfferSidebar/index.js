import React from "react";
import RecommendationsList from "./RecommendationsList";
import TrendsList from "./TrendsList";
import Info from "./Info";

export default () => (
  <div className="col-xs">
    <RecommendationsList />
    <TrendsList />
    <Info />
  </div>
);
