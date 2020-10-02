import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { __catalog_path, __landing_path } from "../../constants/routePaths";
import Card from "../../components/Cards/Cards";

class CatalogDetails extends Component {
  componentDidMount() {
    if (
      this.props.getSubCategories &&
      !this.props.getSubCategories.hasOwnProperty("name")
    ) {
      this.props.history.push(__landing_path);
    }
  }
  onHandleBreadcrumb = () => {
    this.props.history.push(__catalog_path);
  };
  render() {
    return (
      <div>
        <Breadcrumb>
          <div onClick={this.onHandleBreadcrumb} className="breadcrumb-route">
            <b>Equipment Catalog</b>
          </div>
          /
          <div>
            {this.props.getSubCategories && this.props.getSubCategories.name}
          </div>
        </Breadcrumb>
        {this.props.getSubCategories &&
        this.props.getSubCategories.subcategories ? (
          <Card
            catalogs={this.props.getSubCategories.subcategories}
            catalogType="subcategory"
          />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    getSubCategories: store.mainReducer.subCategories,
  };
};

export default connect(mapStateToProps, null)(withRouter(CatalogDetails));
