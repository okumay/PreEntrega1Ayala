import { Item } from "../Item/Item";
import { Container, Row, Spinner } from "react-bootstrap";

import "./ItemList.css";

const ItemList = ({ greeting, items, category }) => {
  if (!items.length) {
    return (
      <div className="loading">
        <h2>{greeting}</h2>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <Container fluid>
      {category ? (
        <h1 className="item-list-header">{category}</h1>
      ) : (
        <h1 className="item-list-header">Todos los productos</h1>
      )}
      <Row className="item-list g-4 row-cols-xs-1 row-cols-md-2 row-cols-xl-4">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </Row>
    </Container>
  );
};

export { ItemList };
