import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Carousel } from "react-bootstrap";
import "./BestBooks.css";
import axios from "axios";
class MyFavoriteBooks extends React.Component {
  state = { userBooks: [] };
  getData = async (email) => {
    try {
      const getUserFromDb = await axios.get("http://localhost:3001/books", {
        params: { email },
      });
      this.setState({ userBooks: getUserFromDb.data });
      console.log(this.state.userBooks);
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount = () => {
    const { email } = this.props.user;
    this.getData(email);
  };
  renderCarousel = () => {
    const Books = this.state.userBooks;
    return Books.length > 0 ? (
      this.state.userBooks.map(({ img_URL, description, title }) => {
        return (
          <Carousel.Item className="myFont">
            <img
              className="d-block w-100"
              src={img_URL}
              alt="First slide"
              style={{ height: "40rem", width: "10rem" }}
            />
            <Carousel.Caption>
              <h3 className="myFont">{title}</h3>
              <p className="myFont">{description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })
    ) : (
      <>No Books</>
    );
  };
  render() {
    return (
      <Jumbotron>
        <Carousel style={{ height: "40rem", width: "50rem" }} variant="dark">
          {this.renderCarousel()}
        </Carousel>
      </Jumbotron>
    );
  }
}

export default MyFavoriteBooks;
