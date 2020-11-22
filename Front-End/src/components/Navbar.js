import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import "./Navbar.css";
class HomeNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeActive: true,
      pinActive: false,
      tagActive: false,
    };
  }

  tabOneClick = () => {
    this.setState({
      pinActive: false,
      homeActive: true,
      tagActive: false,
    });
  };

  tabTwoClick = () => {
    console.log("Two clicked");
    this.setState({
      pinActive: true,
      homeActive: false,
      tagActive: false,
    });
    this.history.push("/pinned");
  };

  tabThreeClick = () => {
    console.log("Three clicked");
    this.setState({
      tagActive: true,
      homeActive: false,
      pinActive: false,
    });
  };

  render() {
    return (
      <div className="header">
        <div className="logo">
          <h2 style={{ textAlign: "center", color: "white" }}>Tweesome</h2>
        </div>

      </div>
    );
  }
}

export default HomeNavbar;
