import React from "react";
import "./dashboard.css";
import {Button} from "@material-ui/core"
function Dashboard() {
  return (
    <div   className="dashBoard">
      <div className="dashBoard__content">
        <h1>Welcome To  Crytyl Mini</h1>
        <p>The one source for all your botting needs</p>
        <div className="dashBoard__contentBtn">
          <Button variant="outlined">OOS: $ 40/month</Button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
