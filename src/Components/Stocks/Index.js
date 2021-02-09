import axios from "axios";
import React, { useEffect, useCallback, useState } from "react";
import { Spinner } from "../../utils";
import { StockColumn } from "../../Components/index";
import "./style.css";
const baseURL =
  "https://finnhub.io/api/v1/quote?symbol={$SYM}&token=bvecinn48v6oh223bkh0";
const Index = ({ size, search }) => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const getStocksData = useCallback((stock) => {
    return axios.get(baseURL.replace("{$SYM}", stock)).catch((err) => {
      console.log(err);
    });
  }, []);
  const nextPage = () => {
    setCurrentPage((ele) => ele + 1);
  };
  const prevPage = () => {
    setCurrentPage((ele) => ele - 1);
  };
  useEffect(() => {
    setCurrentPage(1);
  }, [size]);
  useEffect(() => {
    const stocksList = [
      "AAPL",
      "AMZN",
      "GOOG",
      "GOOGL",
      "MSFT",
      "TSLA",
      "FB",
      "BABA",
      "UBER",
      "DIS",
      "SBUX",
      "TRX",
      "TNC",
      "NFLX",
      "AAA",
    ];
    const data = [];
    const promises = stocksList.map((stock) => {
      return getStocksData(stock).then((res) => {
        data.push({
          name: stock,
          ...res.data,
        });
      });
    });
    Promise.all(promises).then(() => {
      setStockData(data);
      setLoading(false);
    });
  }, [getStocksData]);
  let filteredData;
  if (search && search !== "") {
    filteredData = stockData.filter((ele) =>
      ele.name.toLowerCase().startsWith(search)
    );
  } else {
    filteredData = stockData;
  }

  if (loading) return <Spinner />;
  return (
    <React.Fragment>
      <div className="stock_list">
        <StockColumn
          title="Name"
          data={filteredData
            .slice((currentPage - 1) * size, currentPage * size)
            .map((ele) => ele.name)}
        />
        <StockColumn
          title="Current Rate($)"
          data={filteredData
            .slice((currentPage - 1) * size, currentPage * size)
            .map((ele) => ele.c)}
        />
        <StockColumn
          title="Highest Rate($)"
          data={filteredData
            .slice((currentPage - 1) * size, currentPage * size)
            .map((ele) => ele.h)}
        />
        <StockColumn
          title="Lowest Rate($)"
          data={filteredData
            .slice((currentPage - 1) * size, currentPage * size)
            .map((ele) => ele.l)}
        />
        <StockColumn
          title="Average Rate($)"
          data={filteredData
            .slice((currentPage - 1) * size, currentPage * size)
            .map((ele) => ele.pc)}
        />
        <StockColumn
          title="Last update On"
          data={filteredData
            .slice((currentPage - 1) * size, currentPage * size)
            .map((ele) => new Date(ele.t).toLocaleTimeString())}
        />
      </div>
      <div className="details">
        <div className="list_details">
          Showing {(currentPage - 1) * size + 1} to{" "}
          {currentPage * size <= filteredData.length
            ? currentPage * size
            : filteredData.length}{" "}
          out of {filteredData.length} results
        </div>
        <div className="list_number">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="button"
          >
            Previous
          </button>
          <p>{currentPage}</p>
          <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(filteredData.length / size)}
            className="button"
          >
            Next
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Index;
