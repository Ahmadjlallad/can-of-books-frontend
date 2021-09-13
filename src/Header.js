import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";
import Logout from "./Logout";
import Login from "./Login";
class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <div className="col">
          <Link to="/">Home</Link>
        </div>{" "}
        <div className="col">
          <Link to="/profile">Profile</Link>
        </div>
        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
        <div className="col">
          <Link to="/">
            {this.props.user ? (
              <Logout />
            ) : (
              <Login loginHandler={this.props.loginHandler} />
            )}
          </Link>
        </div>
      </Navbar>
    );
  }
}

export default Header;
