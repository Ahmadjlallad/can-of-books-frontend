import React, { Component } from "react";
import { Form, Button, Modal, Col } from "react-bootstrap";
class BookFormModal extends Component {
  state = {
    changeTitle: this.props.changeTitle,
    changeDec: this.props.changeDec,
    addBooks: false,
  };
  handleClose = () => this.setState({ addBooks: false });
  handleShow = () => this.setState({ addBooks: true });
  render() {
    console.log(
      this.props.changeTitle,
      this.props.changeDec,
      this.props.selected
    );
    return (
      <>
        <Button
          variant="success"
          onClick={() => {
            this.handleShow();
          }}
        >
          {this.props.buttonLabel}
        </Button>

        <Modal show={this.state.addBooks} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              onSubmit={(e) => {
                console.log("update");
                e.preventDefault();
                this.props.updateBook(this.props.id, {
                  title: e.target.bookName.value,
                  description: e.target.bookDescription.value,
                  status: e.target.formGridState.value,
                });
                this.handleClose();
              }}
            >
              <Form.Group className="mb-3" controlId="bookName">
                <Form.Label>Book Name</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) =>
                    this.setState({ changeTitle: e.target.value })
                  }
                  value={this.state.changeTitle}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="bookDescription">
                <Form.Label>Book Description</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => this.setState({ changeDec: e.target.value })}
                  value={this.state.changeDec}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue={this.props.selected}>
                  <option value="Life Changing">Life Changing</option>
                  <option value="Favorite Five">Favorite Five</option>
                  <option value="Recommended To Me">Recommended To Me</option>
                </Form.Select>
              </Form.Group>
              <Button variant="primary" type="submit">
                Save And Close
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
export default BookFormModal;
