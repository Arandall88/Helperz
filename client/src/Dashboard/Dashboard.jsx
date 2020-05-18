import React, { Component } from "react";
import "./Dashboard.css";
class Home extends Component {
  render() {
    return (
      <div>
        <div id="back"></div>
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
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
