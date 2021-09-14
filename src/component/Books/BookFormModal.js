import React, { Component } from "react";
import { Form, Button, Modal, Col } from "react-bootstrap";
class BookFormModal extends Component {
  render() {
    return (
      <>
        <Button variant="success" onClick={this.props.handleShow}>
          Add Book
        </Button>

        <Modal show={this.props.addBooks} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                this.props.setNewBook({
                  title: e.target.bookName.value,
                  description: e.target.bookDescription.value,
                  status: e.target.formGridState.value,
                  email: this.props.user.email,
                });
                this.props.handleClose();
              }}
            >
              <Form.Group className="mb-3" controlId="bookName">
                <Form.Label>Book Name</Form.Label>
                <Form.Control type="text" placeholder="Book Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="bookDescription">
                <Form.Label>Book Description</Form.Label>
                <Form.Control type="text" placeholder="book Description" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
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
