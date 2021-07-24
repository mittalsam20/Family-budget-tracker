import React from "react";
import "./Admin.css";
import AdminCards from "../../component/cards/adminCard";
import MemberCards from "../../component/cards/memberCard";
const Admin = () => {
  const content = {
    totalIncome:"Income So far",
    totalExpense:"Expense So far",
    totalInvestment: "Total investment so far",
    totalSavings: "saving this year",

  };

  return (
    <>
      <div className="container">
        <div className="horizontal-cards">
          <AdminCards
            heading="Income"
            headingColor="green"
            first={content.totalIncome}
          />
          <AdminCards
            heading="Expense's"
            headingColor="red"
            first={content.totalExpense}
            
          />
          <AdminCards
            heading="Savings"
            headingColor="green"
            first={content.totalSavings}
            
          />
          <AdminCards
            heading="Investments"
            headingColor="green"
            first={content.totalInvestment}
          />
          <AdminCards
            heading="Do not know"
            headingColor="red"
            first={"DO not know"}
          />
        </div>
        <div className="title">Family Members</div>
        <div className="vertical-cards">
            <MemberCards
                heading="Member-1"
                headingColor="blue"
                first={"DO not know"}
            />
            <MemberCards
                heading="Member-2"
                headingColor="blue"
                first={"DO not know"}
            />
            <MemberCards
                heading="Member-3"
                headingColor="blue"
                first={"DO not know"}
            />
            <MemberCards
                heading="Member-4"
                headingColor="blue"
                first={"DO not know"}
            />
        </div>
        
      </div>
    </>
  );
};

export default Admin;
