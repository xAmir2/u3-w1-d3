import { Component } from "react";
import { Card, Button } from "react-bootstrap";

class SingleCard extends Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    const { book } = this.props;

    return (
      <Card
        style={{
          width: "300px",
          margin: "10px",
          backgroundColor: "transparent",
          color: "white",
          border: this.state.selected ? "3px solid green" : "1px solid white",
        }}
      >
        <Card.Img
          variant="top"
          src={book.img}
          style={{ height: "300px", cursor: "pointer" }}
          onClick={this.toggleSelected}
        />

        <Card.Body className="d-flex flex-column">
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>Category: {book.category}</Card.Text>
          <Card.Text>Price: {book.price}€</Card.Text>

          <Button className="mt-auto" variant="success">
            Buy
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleCard;
