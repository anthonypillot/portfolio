import React from "react";
import moment from "moment";
import "./TopBar.css";

export default class TopBar extends React.Component {
  render() {
    return (
      <div className="top-bar">
        <span className="contrasted">anthonypillotOS</span>
        <a href="/">Launch</a>
        <a href="/">Blog</a>
        <a href="/">Contact</a>
        <a href="/">About</a>

        <div className="outright">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/anthonypillot/personal-website"
          >
            GitHub
          </a>

          <span className="contrasted">
            {moment().format("LL")} {moment().format("LTS")}
          </span>
        </div>
      </div>
    );
  }

  // intended to update the TopBar component every seconds to update the date time
  componentDidMount() {
    this.interval = setInterval(() => this.setState({}), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}
