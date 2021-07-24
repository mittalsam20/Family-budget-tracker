import React from "react";
import "./home.css";
import HomeCards from "../../component/cards/homeCards";
function Home() {
  return (
    <>
      <div className="container">
        <div className="all-cards">
          <HomeCards heading="Income" headingColor="green" />
          <HomeCards heading="Expense's" headingColor="red" />
          <HomeCards heading="Savings" headingColor="green" />
          <HomeCards heading="Investments" headingColor="green" />
        </div>
      </div>
    </>
  );
}

export default Home;
