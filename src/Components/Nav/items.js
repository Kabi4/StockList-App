import React from "react";
import "./style.css";
import Item from "./item";
const items = ({ data }) => {
  return (
    <ul className="header_items">
      {data.map((ele) => {
        return <Item Icon={ele.Icon} key={ele.ele} ele={ele.ele}></Item>;
      })}
    </ul>
  );
};

export default items;
