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
          <h2 style={{ textAlign: "center", color: "white" }}>Twitter Analytics</h2>
        </div>
        <div className="menuItems">
          <NavLink
            to="/"
            activeStyle={{ fontWeight: "bold", color: "#cf913f" }}
            style={{ color: "#c5c5c5" }}
            className="nav-link"
            exact
          >
           <h4> Home</h4>
          </NavLink>
          <NavLink
            to="/link1"
            activeStyle={{ fontWeight: "bold", color: "#cf913f" }}
            style={{ color: "#c5c5c5" }}
            className="nav-link"
          >
            <h4>Link1 </h4>
          </NavLink>
          <NavLink
            to="/link2"
            activeStyle={{ fontWeight: "bold", color: "#cf913f" }}
            style={{ color: "#c5c5c5" }}
            className="nav-link"
          >
           <h4>Link2</h4> 
          </NavLink>
        </div>
      </div>
    );
  }
}

export default HomeNavbar;
