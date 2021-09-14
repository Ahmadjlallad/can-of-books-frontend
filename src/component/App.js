import React from "react";
import Header from "./Header";
import IsLoadingAndError from "../IsLoadingAndError";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BestBooks from "./Books/BestBooks";
import Profile from "./Profile";

import { Card } from "react-bootstrap";
class App extends React.Component {
  state = { user: null };
  loginHandler = (user) => {
    this.setState({ user });
  };
  didNotLogeInYet = () => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>Click Log In in the Navigation bar</Card.Text>
        </Card.Body>
      </Card>
    );
  };
  render() {
    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header loginHandler={this.loginHandler} user={this.state.user} />
            <Switch>
              <Route exact path="/">
                {this.state.user ? (
                  <BestBooks user={this.state.user} />
                ) : (
                  this.didNotLogeInYet()
                )}
              </Route>
              <Route path="/profile">
                {this.state.user ? (
                  <Profile user={this.state.user} />
                ) : (
                  this.didNotLogeInYet()
                )}
              </Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default App;
