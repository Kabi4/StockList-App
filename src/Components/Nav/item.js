import React from "react";

const item = ({ Icon, ele }) => {
  return (
    <li className="header_item">
      <span className="hov"></span>
      {Icon && Icon}
      {ele}
    </li>
  );
};

export default item;
