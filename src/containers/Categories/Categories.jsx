import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Actions from "../../actions";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import {
  __catalog_details_path,
  __landing_path,
} from "../../constants/routePaths";
import Card from "../../components/Cards/Cards";

class Category extends Component {
  componentDidMount() {
    if (this.props.getCategories && !this.props.getCategories.length) {
      this.props.history.push(__landing_path);
    }
  }
  onSelectedCategory = (selectedCategory) => {
    this.props.setSelectedSubCategory(selectedCategory);
    this.props.history.push(`${__catalog_details_path}`);
  };

  render() {
    return (
      <div className="catalog-container">
        <Breadcrumb>
          <div>Equipment Catalog</div>
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
    getCategories: store.mainReducer.categories,
  };
};

const mapActionsToProps = {
  setSelectedSubCategory: Actions.setSelectedSubCategory,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withRouter(Category));
