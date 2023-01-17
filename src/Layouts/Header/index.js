import React, { Component } from "react";
import "./index.css";
import { Navbar, NavbarBrand, Nav, Collapse, NavItem } from "reactstrap";
import NavLink from "react-router-dom/NavLink";
import image from './primelogo.png'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <>
        <Navbar expand="lg header-top">
          <div className="container">
            <button
              onClick={this.toggleNav}
              className="mr-2 toggle-button navbar-toggler"
            >
              <span className="fa fa-solid fa-bars"></span>
            </button>
            <NavbarBrand className="mr-auto navbar-logo" href="/home">
              <img
                className="nav_logo pt-2"
                src={image}
                alt="Amazon Prime Video Logo"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="offset-2">
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg mt-2"> Home</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/trending">
                    <span className="fa fa-amazon fa-lg mt-2">
                      {" "}
                      Amazon Originals
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/trending">
                    <span className="fa fa-fire fa-lg mt-2"> Trending Now</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/trending">
                    <span className="fa fa-line-chart fa-lg mt-2">
                      {" "}
                      Top Rated
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/trending">
                    <span className="fa fa-list fa-lg mt-2">
                      {" "}
                      Miscellaneous
                    </span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}

export default Header;
