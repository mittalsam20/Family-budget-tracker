import React, { useEffect, useState } from "react";
import CustomButton from "../../custom-button/CustomButton";
import Stock from "../stock/Stock";
import "./List.scss";

const List = () => {
  const people = [
    "Siri",
    "Alexa",
    "Google",
    "Facebook",
    "Twitter",
    "Linkedin",
    "Sinkedin",
  ];

  const [stocks, setStocks] = useState(people);

  console.log("hi", stocks);
  const [searchResult, setSearchResult] = useState("");
  // const [urls, setUrls] = useState([]);

  // useEffect(() => {
  //   fetchComments();
  // }, []);

  // useEffect(() => {
  //   //console.log(comments);
  // }, [urls]);

  // const fetchComments = async () => {
  //   const url = `https://www.alphavantage.co/query?function=${searchResult}&keywords=tesco&apikey=UQ779CNSY54MJ8HZ`;

  //   fetch(url).then((data) => {
  //     setUrls(data);
  //   });
  // };

  const handeChange = (e) => {
    // console.log(stocks);
    setSearchResult(e.target.value);
  };

  useEffect(() => {
    setStocks(people);
    console.log(searchResult);
    const filterStocks = stocks.filter((stock) => {
      stock.toLowerCase().includes(searchResult.toLowerCase());
    });
    console.log(filterStocks);
    setStocks(filterStocks);
  }, [searchResult]);

  return (
    <div className="list">
      <div className="heading">
        <h1>Your Stocks</h1>
      </div>
      <input
        className="search"
        type="search"
        placeholder="Search stock"
        onChange={handeChange}
      />

      <div className="table">
        {console.log("roh", stocks)}
        {stocks &&
          stocks.map((stock) => {
            <Stock stock={stock} />;
            // <tr>
            //   <td>
            //     <Stock stock={stock} />
            //   </td>
            //   <td>
            //     <strong>14222</strong>
            //   </td>
            // </tr>;
          })}
        <tr>
          <td>india</td>
          <td>
            <strong>123</strong>
          </td>
        </tr>
      </div>
      <div className="button">
        <CustomButton text={"Add New"} />
      </div>
    </div>
  );
};

export default List;
