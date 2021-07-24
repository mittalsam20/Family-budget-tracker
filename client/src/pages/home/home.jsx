import React from "react";
import "./home.css";
import HomeCards from "../../component/cards/homeCards";
import Inexcrud from "../../component/inexcrud/inexcrud";
import Homegraphs from "../../component/homegraphs/homegraphs";
const Home = () => {
  const content = {
    monthlyIncome: "Monthly Income",
    MTD: "mtd ki value",
    today: "today ki value",
    totalInvestment: "Total investment so far",
    totalSavings: "saving this year",
  };

  return (
    <>
      <div className="container">
        <div className="all-cards">
          <HomeCards
            heading="Income"
            headingColor="green"
            first={content.monthlyIncome}
          />
          <HomeCards
            heading="Expense's"
            headingColor="red"
            first={content.MTD}
            second={content.today}
          />
          <HomeCards
            heading="Savings"
            headingColor="green"
            first={content.MTD}
            second={content.today}
            third={content.totalSavings}
          />
          <HomeCards
            heading="Investments"
            headingColor="green"
            first={content.MTD}
            third={content.totalInvestment}
          />
        </div>
        <div className="crud-and-graph">
          <div className="crud">
            <Inexcrud />
          </div>
          <div className="graph">
            <Homegraphs />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
