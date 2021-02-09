import React, { useState } from "react";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import "./style.css";
import { StockList } from "../../Components";
const Index = () => {
  const [listSize, setListSize] = useState(10);
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="body">
      <div className="body_header">
        <h1 className="body_header_heading">Top Stocks</h1>
        <div className="body_header_icon">
          <ShowChartIcon className="body_header_icon_icon" />
        </div>
      </div>
      <hr />
      <div className="body_filteration">
        <div className="body_list_size">
          <label for="list">List Size:</label>

          <select
            value={listSize}
            name="list"
            onChange={(e) => {
              setListSize(e.target.value);
            }}
            id="list"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <div className="body_list_search">
          <label className="body_list_search_Label" for="list_search">
            Search:{" "}
          </label>
          <input
            className="body_list_search_input"
            name="list_search"
            placeholder="Search By Name"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
      </div>
      <StockList size={listSize} search={searchInput} />
    </div>
  );
};
// K0QW34S0LKTRNMFS
export default Index;
