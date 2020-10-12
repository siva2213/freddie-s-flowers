import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Actions from "../../actions";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { __item_list_path, __item_description_path } from "../../constants";
import Card from "../../components/Cards/Cards";

class Category extends Component {
  componentDidMount() {
    if (this.props.getCategories && !this.props.getCategories.length) {
      this.props.history.push(__item_list_path);
    }
  }
  onSelectedCategory = (selectedCategory) => {
    this.props.setSelectedItem(selectedCategory);
    this.props.history.push(`${__item_description_path}`);
  };

  render() {
    return (
      <div className="catalog-container">
        <Breadcrumb>
          <div>Item List</div>
        </Breadcrumb>
        <Card
          catalogs={this.props.getCategories}
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

const mapActionsToProps = {
  setSelectedItem: Actions.setSelectedItem,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withRouter(Category));
