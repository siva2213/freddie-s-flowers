import React, { Component } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

class Category extends Component {
  render() {
    return (
      <div>
        <Breadcrumb>
          <li>
            <a href="">home</a>
          </li>
          <li>
            <a href="">catalog</a>
          </li>
        </Breadcrumb>
      </div>
    );
  }
}

export default Category;
