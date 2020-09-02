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
              <h1 style={{ color: "#5438dc" }}></h1>

              <span className="white-text">
                <strong>
                  Help a family in need by volunteering to deliver food pantry
                  items with contactless delivery.Since this pandemic started,
                  alot of families and children have had to go without food.
                  Become a helper and lets encourage each other to always pay it
                  forward with kindess and compassion. We are all in this
                  together and we all deserve to have what we need.It is up to
                  us as a whole to make a difference. Lots of small pieces add
                  up to one big piece. I encourage you to make your pieces add
                  up to a whole.We will make it through this together. Become a
                  Helper today! Search for a food pantry below.
                </strong>{" "}
                
                
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
                    <h2>
                      
                        It's never too late to Help!
                      </h2>{" "}
                      
                
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
