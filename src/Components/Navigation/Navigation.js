import React, { useContext } from "react";
import "./Navigation.css";
import {
  Navbar,
  Nav
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../App";
const Navigation = () => {
  const [isSignIn, setIsSignIn] = useContext(UserContext);
  console.log(isSignIn.name);

  return (
    <div className="navigation">
      <Navbar expand="lg">
        <Link to="/">
          <Navbar.Brand className="nav__brand">Let's Ride</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav__links">
            <NavLink exact={true} activeClassName="is-active" to="/home">
              Home
            </NavLink>
            <NavLink exact={true} activeClassName="is-active" to="/destination">
              Destination
            </NavLink>
            <NavLink exact={true} activeClassName="is-active" to="/blog">
              Blog
            </NavLink>
            <NavLink exact={true} activeClassName="is-active" to="/contact">
              Contact
            </NavLink>
            {isSignIn.displayName ? <h5 id='profileName'>
              {isSignIn.displayName}
            </h5> : <NavLink exact={true} activeClassName="is-active" to="/login">
              Login / Sign Up
            </NavLink>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
