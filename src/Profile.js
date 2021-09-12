import { Component } from "react";
import { Card } from "react-bootstrap";

class Profile extends Component {
  render() {
    const { picture, name, email, given_name, family_name } = this.props.user;
    return (
      <Card>
        <Card.Header>
          <Card.Img
            variant="top"
            src={picture}
            style={{ width: "5rem", height: "6rem" }}
          />
          <Card.Title>Hi {name}</Card.Title>
        </Card.Header>

        <Card.Body>
          <Card.Text>
            Email: {email}
            <br />
            {given_name && `First Name: ${given_name}`}
            <br />
            {family_name && `Last Name: ${family_name}`}
            <br />
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Profile;
