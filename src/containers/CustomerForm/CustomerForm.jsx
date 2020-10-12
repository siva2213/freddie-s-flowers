import React, { Component } from "react";
import { connect } from "react-redux";
import Actions from "../../actions";
import "./CustomerForm.css";
class CustomerForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      mobile: "",
      address: "",
    };
  }

  onSubmit = (e) => {
    this.props.setCustomerInfo({ ...this.state });
  };
  render() {
    return (
      <div className="profile-container">
        <form onSubmit={this.onSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Email</label>
            <input
              onChange={(e) => this.setState({ email: e.target.value })}
              type="email"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Address</label>
            <input
              onChange={(e) => this.setState({ address: e.target.value })}
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Phone Number</label>
            <input
              onChange={(e) => this.setState({ mobile: e.target.value })}
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <input
            type="submit"
            class="form-control"
            value="Submit"
            id="exampleInputPassword1"
          />
        </form>
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
  setCustomerInfo: Actions.setCustomerInfo,
};

export default connect(mapStateToProps, mapActionsToProps)(CustomerForm);
