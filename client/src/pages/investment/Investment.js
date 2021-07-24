import React from "react";
import List from "../../component/investment/list/List";
import "./Investment.scss";
function Investment() {
  return (
    <div className="investment">
      <div className="graph">Graph</div>
      <div className="list">
        <List />
      </div>
    </div>
  );
}

export default Investment;
