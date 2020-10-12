import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Card from "../../components/Cards/Cards";

class Category extends Component {
  constructor() {
    super();
    this.state = {
      filterData: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.getCategories && !state.filterData.length) {
      state.filterData = props.getCategories;
    }
    return state;
  }

  onFilterImage = (e) => {
    let inputText = e.target.value;
    this.setState((prevState) => {
      let modifiedState = prevState.filterData.filter((item) =>
        item.name.includes(inputText)
      );
      return {
        filterData: modifiedState,
      };
    });
  };

  render() {
    return (
      <div className="catalog-container">
        <div style={{ width: "50%" }}>
          <label for="exampleInputEmail1">Search</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={this.onFilterImage}
          />
        </div>
        <Card
          catalogs={this.state.filterData}
          onSelectedCategory={this.onSelectedCategory}
          catalogType="category"
        />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    getCategories: store.mainReducer.itemList,
  };
};

export default connect(mapStateToProps, null)(withRouter(Category));
