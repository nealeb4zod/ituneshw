import React from "react";
import ChartItem from "./ChartItem";

const ChartList = ({ chartData }) => {
  let chartArray = chartData.map((entry) => {
    return (
      <ChartItem
        title={entry["im:name"]["label"]}
        artist={entry["im:artist"]["label"]}
        key={entry["id"]["attributes"]["im:id"]}
      ></ChartItem>
    );
  });

  return <ol>{chartArray}</ol>;
};

export default ChartList;
