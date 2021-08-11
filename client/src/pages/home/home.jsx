import React from "react";
import "./home.css";
import HomeCards from "../../components/cards/homeCards";
import Inexcrud from "../../components/inexcrud/inexcrud";
import Homegraphs from "../../components/homegraphs/homegraphs";
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
        <div className="crud-and-graph">
          <div className="crud">
            <Inexcrud />
          </div>
        </div>
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
        </div>

        <div className="all-cards">
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
      </div>
    </>
  );
};

export default Home;
