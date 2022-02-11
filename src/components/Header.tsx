//import "../theme/variables.scss";
import "./Header.scss";
import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <div className="headerBox">
        <h1 className="headerLogo">Funky Quarks</h1>
      </div>
    );
  }
}
