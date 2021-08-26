import React from "react";
import "./css/myStyles.css";
import MTable from './t';
import Chart from './Chart';

export default function StyleSheet() {
  return (
    <div className="header">
      <div className="playerOne">
        <MTable/>
      </div>
      <div className="playerTwo">
        <Chart/>
      </div>
    </div>
  );
}
