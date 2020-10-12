import React, { Component } from "react";
import "./ProfilePage.css";
class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  onChangeEmail = (e) => {
    window.localStorage.setItem("email", e.target.value);
  };
  onChangeMobileNum = (e) => {
    window.localStorage.setItem("phone number", e.target.value);
  };
  render() {
    return (
      <div className="profile-container">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.onChangeEmail}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Phone Number</label>
            <input
              onChange={this.onChangeMobileNum}
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Profile;
