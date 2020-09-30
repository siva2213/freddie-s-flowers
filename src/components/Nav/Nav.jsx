import React, { Component } from "react";
import GroupedDropDown from "../../components/GroupedDropdown/GroupedDropdown";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div id="nav-menu">
        <div className="nav-item">RENTAL MANAGEMENT SYSTEM</div>
        <div className="nav-item">
          <GroupedDropDown />
        </div>
      </div>
    );
  }
}

export default Nav;
