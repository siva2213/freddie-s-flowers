import React, { Component } from "react";
import "./GroupedDropdown.css";
import DummyData from "../../shared/data.json";

class GroupedDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLocation: "",
      branchOptions: [],
      selectedBranch: "",
    };
  }

  onHandleLocation = (selectedItem) => {
    let setBranchOptions = DummyData.data.locations.reduce((acc, cur) => {
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

  onHandleBranch = (selectedItem) => {
    this.setState({
      selectedBranch: selectedItem,
    });
  };

  render() {
    const data = DummyData.data.locations;
    console.log(this.state);
    return (
      <div id="menu">
        <ul>
          <li>
            <a class="prett" href="#" title="Menu">
              Select Location
            </a>
            <ul class="menus">
              {data.map((location) => {
                return (
                  <li class="has-submenu" key={location.name}>
                    <a
                      class="prett"
                      title="Dropdown 1"
                      onClick={() => this.onHandleLocation(location.name)}
                    >
                      {location.name}
                    </a>
                    {location.branches && location.branches.length ? (
                      <ul class="submenu">
                        <li>
                          <a title="Sub Menu">asas</a>
                        </li>
                        <li>
                          <a title="Sub Menu">asas</a>
                        </li>
                        <li>
                          <a title="Sub Menu">asas</a>
                        </li>
                        {/* {this.state.branchOptions.map((branch) => {
                          debugger;
                          return (
                            <li key={branch.name}>
                              <a title="Sub Menu">{branch.name}</a>
                            </li>
                          );
                        })} */}
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

export default GroupedDropdown;
