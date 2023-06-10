import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ id, title, price, imgUrl, stock }) => {
  return (
    <div>
      <Card className="item" id={id}>
        <Card.Img variant="top" src={imgUrl} alt="" />
        <Card.Body>
          <Card.Title className="title">{title}</Card.Title>
          <p className="price">${price}</p>

          {!stock ? (
            <Button variant="secondary" disabled>
              Sin stock
            </Button>
          ) : (
            <Button variant="primary" as={Link} to={`/item/${id}`}>
              Ver detalle
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export { Item };
