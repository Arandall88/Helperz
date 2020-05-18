import React, { Component } from "react";
class CompleteProfile extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                <h2 className="text-center">Sign up to be a volunteer!</h2>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="container">
          <div className="row">
            <form className="col s6">
              <div className="row">
                <div className="input-field col s6">
                  <input
                    placeholder="Placeholder"
                    id="first_name"
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                  <input id="last_name" type="text" className="validate" />
                  <label htmlFor="last_name">Last Name</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" />
                  <label htmlFor="email">Email</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input id="password" type="password" className="validate" />
                  <label htmlFor="password">Password</label>
                </div>
              </div>

              <div className="container">
                <div className="row">
                  <button
                    class="btn waves-effect waves-light"
                    type="submit"
                    name="action"
                  >
                    Submit
                    <i class="material-icons right">send</i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default CompleteProfile;
