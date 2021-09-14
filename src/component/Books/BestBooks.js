import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BestBooks.css";
import BookFormModal from "./BookFormModal";
import axios from "axios";
import { Card, Button, Row, Col } from "react-bootstrap";
class MyFavoriteBooks extends React.Component {
  state = { userBooks: [], addBooks: false };

  handleClose = () => this.setState({ addBooks: false });
  handleShow = () => this.setState({ addBooks: true });
  getData = async (email) => {
    try {
      const getUserFromDb = await axios.get(
        "https://canofbooksbackendexe.herokuapp.com/books",
        {
          params: { email },
        }
      );
      this.setState({ userBooks: getUserFromDb.data });
    } catch (err) {
      console.log(err);
    }
  };
  setNewBook = async (newBook) => {
    try {
      const { data: newBooks } = await axios.post(
        "https://canofbooksbackendexe.herokuapp.com/books",
        newBook
      );
      this.setState({ userBooks: newBooks });
    } catch (err) {
      console.log(err);
    }
  };
  deleteBooks = async (id) => {
    try {
      await axios.delete(
        `https://canofbooksbackendexe.herokuapp.com/books/${id}`
      );
      await this.getData(this.props.user.email);
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount = () => {
    const { email } = this.props.user;
    this.getData(email);
  };
  renderCard = () => {
    return this.state.userBooks?.myBooks?.length > 0
      ? this.state.userBooks.myBooks.map((book) => {
          return (
            <Col sm key={book._id}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>book Title: {book.title}</Card.Title>
                  <Card.Text>description: {book.description}</Card.Text>

                  <Button
                    onClick={() => this.deleteBooks(book._id)}
                    variant="primary"
                  >
                    Delete
                  </Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                  status: {book.status}
                </Card.Footer>
              </Card>
            </Col>
          );
        })
      : null;
  };
  render() {
    console.log(this.state.userBooks);
    return (
      <>
        <BookFormModal
          user={this.props.user}
          addBooks={this.state.addBooks}
          handleShow={this.handleShow}
          handleClose={this.handleClose}
          setNewBook={this.setNewBook}
        />
        <Row className="justify-content-md-center"> {this.renderCard()}</Row>
      </>
    );
  }
}

export default MyFavoriteBooks;
