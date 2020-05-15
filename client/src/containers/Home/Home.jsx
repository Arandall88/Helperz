import React, { Component } from 'react';
import "./Home.css";
import Help from "../../images/help.jpg";

class Home extends Component {
  render() {
    return (
      <div id="helping-hands">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 style={{ textAlign: "center", float: "none" }}>
                Welcome to Helperz!
              </h1>
            </div>
          </div>
        </div>
      </div>
      // <div>
      //   Home Page.
      //     <img src={Help}  className= "image-fluid" alt=" Helping"  id="helping-hands" />
      //   </div>
    );
  }
}
export default Home;
