import React from "react";

const ChartItem = ({ title, artist }) => {
  return (
    <>
      <li>
        {title} by {artist}
      </li>
    </>
  );
};

export default ChartItem;
