import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavItems from "../../routes/appRoutes";
import { __item_list_path } from "../../constants";
import "./Nav.css";

const styleNavItem = {
  "text-decoration": "none",
  color: "#000",
  padding: "0.25rem 1rem",
  "line-height": "35px",
};
const activeNav = { color: "blue", "border-bottom": "2px solid blue" };
class Nav extends Component {
  render() {
    return (
      <div id="nav-menu">
        {NavItems.map((navItem) => {
          if (navItem.name === "Item Description") {
            return;
          }
          return (
            <div className="nav-item" key={navItem.name}>
              <NavLink
                style={styleNavItem}
                activeStyle={activeNav}
                to={navItem.path}
              >
                {navItem.name}
              </NavLink>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Nav;
