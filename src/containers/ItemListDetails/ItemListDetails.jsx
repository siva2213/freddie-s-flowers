import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { __item_list_path } from "../../constants";

class CatalogDetails extends Component {
  componentDidMount() {
    if (
      this.props.getSubCategories &&
      !this.props.getSubCategories.hasOwnProperty("name")
    ) {
      this.props.history.push(__item_list_path);
    }
  }
  onHandleBreadcrumb = () => {
    this.props.history.push(__item_list_path);
  };
  render() {
    return (
      <div>
        <Breadcrumb>
          <div onClick={this.onHandleBreadcrumb} className="breadcrumb-route">
            <b>Item List</b>
          </div>
          /
          <div>
            {this.props.getItemDescription &&
              this.props.getItemDescription.name}
          </div>
        </Breadcrumb>
        {this.props.getItemDescription ? (
          <div className="item-desc">
            <div className="item-desc-inner">
              <strong>Item:</strong> {this.props.getItemDescription.name}
            </div>
            {this.props.getItemDescription &&
              this.props.getItemDescription.subcategories &&
              this.props.getItemDescription.subcategories.map((item) => {
                return (
                  <div className="item-desc-inner">
                    <strong>Sub - Items:</strong> {item.name}
                  </div>
                );
              })}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    getItemDescription: store.mainReducer.itemDescription,
  };
};

export default connect(mapStateToProps, null)(withRouter(CatalogDetails));
