import React, { Component } from 'react';
import Help from "../images/help.jpg";

class Home extends Component {
  render() {
    return (
      <div> Home Page.
          <img src={Help} alt= " Helping" />
      </div>
    );
  }
}
export default Home;
