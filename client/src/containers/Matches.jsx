import React, { Component } from "react";
import "./Matches.css";
class Home extends Component {
  render() {
    return (
      <div>
        <div id="request"></div>
        <div className="container">
          <div className="row">
            <div>
              <div>
                <div>
                  <div className="row">
                    <div className="col s12 m7">
                      <div className="card">
                        <div className="card-image"></div>
                        <div className="card-content">
                          <p>
                            <h3>
                              Please request a delivery below and you will be
                              matched with a volunteer.
                            </h3>{" "}
                          </p>
                        </div>
                        <div className="card-action">
                          <a href="../">This is a link</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img class="materialboxed" width="650" src=""></img>
                </div>
                <div className="container">
                  <h1>Request a delivery!</h1>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col"></div>
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
                      <label htmlFor="Phone number">Phone Number</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        id="password"
                        type="password"
                        className="validate"
                      />
                      <label htmlFor="address">Address</label>
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
        </div>
      </div>
    );
  }
}
export default Home;
