import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./GroupedDropdown.css";
import { __catalog_path } from "../../constants/routePaths";
import Actions from "../../actions";

class GroupedDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLocation: "",
      branchOptions: [],
      selectedBranch: "",
    };
  }

  onHandleLocation = (e, selectedItem) => {
    e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.parentElement.className.indexOf("has-submenu") > -1) {
      e.target.classList.toggle("open");
    }
    let setBranchOptions = this.props.getRMSData.reduce((acc, cur) => {
      if (cur.name === selectedItem) {
        return {
          ...acc,
          ...cur,
        };
      } else {
        return {
          ...acc,
        };
      }
    });
    this.setState({
      selectedLocation: selectedItem,
      branchOptions: setBranchOptions.branches,
    });
  };

  onHandleBranch = (e, selectedCategory) => {
    this.setState({
      selectedBranch: selectedCategory.name,
    });
    this.props.setSelectedCategory(selectedCategory.categories);
    this.props.history.push(__catalog_path);
    let classes = document.getElementsByClassName("has-submenu");
    for (let i = 0; i < classes.length; i++) {
      classes[i].classList.remove("a.prett.open");
      classes[i].firstChild.className = "prett";
      classes[i].firstElementChild.className = "prett";
      classes.item(i).classList.add("a.prett");
    }
  };

  render() {
    return (
      <div id="menu">
        <ul>
          <li>
            <a className="prett" title="Menu">
              Select Location
            </a>
            <ul className="menus">
              {this.props.getRMSData.map((location) => {
                return (
                  <li className="has-submenu" key={location.name}>
                    <a
                      className="prett"
                      title="Dropdown 1"
                      onClick={(e) => this.onHandleLocation(e, location.name)}
                    >
                      {location.name}
                    </a>
                    {location.branches && location.branches.length ? (
                      <ul className="submenu">
                        {this.state.branchOptions.map((branch) => {
                          return (
                            <li key={branch.name}>
                              <a
                                title="Sub Menu"
                                onClick={(e) => this.onHandleBranch(e, branch)}
                              >
                                {branch.name}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    getRMSData: store.mainReducer.rmsData,
  };
};

const mapActionsToProps = {
  setSelectedCategory: Actions.setSelectedCategory,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withRouter(GroupedDropdown));
