import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

class CatalogDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      getCatalog: "",
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.match.params.hasOwnProperty("id") && !state.getCatalog) {
      state.getCatalog = props.match.params.id;
    }
    return state;
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <Breadcrumb>
          <li>
            <a href="">Equipment Catalog</a>
          </li>
          <li>{this.state.getCatalog}</li>
        </Breadcrumb>
      </div>
    );
  }
}

export default withRouter(CatalogDetails);
