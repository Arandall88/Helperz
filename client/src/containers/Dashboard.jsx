import React, { Component } from "react";
class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div
            className="col s6"
            style={{ textAlign: "center", float: "none" }}
          >
            <div className="card-panel blue">
              <h1 style={{ color: "#5438dc" }}>Welcome to Helperz!</h1>

              <span className="white-text">
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively. I am similar to what is called a panel in other
                frameworks.
              </span>
            </div>
          </div>
        </div>
        <div>
          <br></br>
        </div>
        <div class="container">
          <div class="row">
            <div class="col">
              <div className="red white-text">
                <div className="col-sm-3 col-md-3 pull-left">
                  <form className="navbar-form" role="search">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        name="srch-term"
                        id="srch-term"
                      />
                      <div className="input-group-btn">
                        <button
                          class="btn waves-effect waves-light"
                          type="submit"
                          name="action"
                        >
                          Submit
                          <i class="material-icons right">send</i>
                        </button>
                        <i className="glyphicon glyphicon-search" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="container">
              <div class="row">
                <div class="col s12 m5">
                  <div class="card-panel teal">
                    <span class="white-text">
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively. I am similar to what is
                      called a panel in other frameworks.
                    </span>
                  </div>
                </div>
                <div>
                  <div className="row">
                    <form className="col s12">
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
                          <input
                            id="last_name"
                            type="text"
                            className="validate"
                          />
                          <label htmlFor="last_name">Last Name</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input
                            disabled
                            defaultValue="I am not editable"
                            id="disabled"
                            type="text"
                            className="validate"
                          />
                          <label htmlFor="disabled">Disabled</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input
                            id="password"
                            type="password"
                            className="validate"
                          />
                          <label htmlFor="password">Password</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="email" type="email" className="validate" />
                          <label htmlFor="email">Email</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col s12">
                          This is an inline input field:
                          <div className="input-field inline">
                            <input
                              id="email_inline"
                              type="email"
                              className="validate"
                            />
                            <label htmlFor="email_inline">Email</label>
                            <span
                              className="helper-text"
                              data-error="wrong"
                              data-success="right"
                            >
                              Helper text
                            </span>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
