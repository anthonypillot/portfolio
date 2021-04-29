import React from "react";
import "./BottomBar.css";

export default class BottomBar extends React.Component {
  render() {
    return (
      <div className="bottom-bar">
        <span className="contrasted">Information program here</span>

        <div className="outright">
          <span className="contrasted">OS version: 0.1.0</span>
        </div>
      </div>
    );
  }
}
