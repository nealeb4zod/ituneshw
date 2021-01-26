import React, { useEffect, useState } from "react";
import ChartList from "../components/ChartList";

const ChartBox = () => {
  const [chartData, setChartData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getChartData();
  }, []);

  const getChartData = () => {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
      .then((res) => res.json())
      .then((data) => setChartData(data.feed.entry))
      .then(() => setDataLoaded(true));
  };

  return (
    <>
      <h1>Top 20</h1>
      <ChartList chartData={chartData} />
    </>
  );
};

export default ChartBox;
