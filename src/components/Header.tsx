//import "../theme/variables.scss";
import React from "react";
import "./Header.scss";
//import "../theme/models.scss";

export class Header extends React.Component {
  render() {
    return (
      <div className="HeadingContainer">
        <div className="HeaderBox">
          <div className="HeaderText">Funky Quarks</div>
        </div>
      </div>
    );
  }
}
