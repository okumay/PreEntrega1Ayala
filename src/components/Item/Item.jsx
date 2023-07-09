import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ id, title, price, imgUrl, slug }) => {
  return (
    <div>
      <Card className="item" id={id}>
        <Card.Img variant="top" src={imgUrl} alt="" />
        <Card.Body>
          <Card.Title className="title">{title}</Card.Title>
          <p className="price">${price}</p>

          <Button variant="primary" as={Link} to={`/item/${slug}`}>
            Ver detalle
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export { Item };
