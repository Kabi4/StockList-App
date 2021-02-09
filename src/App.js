// import axios from "axios";
// import { useEffect } from "react";
import "./App.css";
import { Header, Body } from "./Container/index";

function App() {
  // useEffect(() => {
  //   async function getn() {
  //     var options = {
  //       method: "GET",
  //       url:
  //         "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials",
  //       params: { symbol: "AMRN", region: "US" },
  //       headers: {
  //         "x-rapidapi-key":
  //           "43f39e77eamshae6cc925edaad84p1a6ba1jsn917f04716a40",
  //         "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
  //       },
  //     };

  //     axios
  //       .request(options)
  //       .then(function (response) {
  //         console.log(response.data);
  //       })
  //       .catch(function (error) {
  //         console.error(error);
  //       });
  //   }
  //   getn();
  // }, []);
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
    </div>
  );
}

export default App;
