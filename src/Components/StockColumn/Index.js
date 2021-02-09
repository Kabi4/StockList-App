import React from "react";
import "./style.css";
const Index = ({ title, data }) => {
  return (
    <div className="list_col">
      <h2 className="list_col_title">{title}</h2>
      {data.map((ele, i) => (
        <div
          key={title !== "Last update On" ? ele : i}
          className={`list_col_Object${title === "Name" ? "_name" : ""}`}
        >
          <h4>{ele}</h4>
        </div>
      ))}
    </div>
  );
};

export default Index;
