import React from "react";
import "./dashboard.css";
import {Button} from "@material-ui/core"
function Dashboard() {
  return (
    <div   className="dashBoard">
      <div className="dashBoard__content">
        <h5>The best web & mobile solutions</h5>
        <h1>Digital Product Design Company</h1>
        <p>The clients business challenges are our best incentives</p>
        <div className="dashBoard__contentBtn">
          <Button variant="outlined">LET'S GET STARTED</Button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
