import React, { Component } from "react";
import "./Home.css";
// import Help from "../../images/help.jpg";

class Home extends Component {
  render() {
    return (
      <>
        <div id="helping-hands">
          <div className="container">
            <div className="row">
              <div
                className="col"
                style={{ textAlign: "center", float: "none" }}
              >
                <h1 style={{ color: "#5438dc" }}>Welcome to Helperz!</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col" style={{ textAlign: "center", float: "none" }}>
              <h2>Volunteer Food Pantry Delivery</h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
