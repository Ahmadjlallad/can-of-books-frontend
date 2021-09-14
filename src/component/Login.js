import React from "react";
import { Button } from "react-bootstrap";
import "./Login.css";
import { withAuth0 } from "@auth0/auth0-react";

class Login extends React.Component {
  componentDidMount() {
    const { user } = this.props.auth0;
    this.props.loginHandler(user);
  }
  render() {
    const { loginWithRedirect } = this.props.auth0;
    return <Button onClick={() => loginWithRedirect()}>Log In</Button>;
  }
}

export default withAuth0(Login);
