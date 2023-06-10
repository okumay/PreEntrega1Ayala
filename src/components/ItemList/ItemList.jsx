import { useEffect, useState } from "react";
import { Item } from "../Item/Item";
import "./ItemList.css";
import {
  getCategoryName,
  getProducts,
  getProductsByCategory,
} from "../../assets/asyncMock";
import { Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ItemList = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setCategory(getCategoryName(id));
      getProductsByCategory(id)
        .then((res) => {
          setItems(res);
        })
        .catch((error) => {
          error.log(error);
        });
    } else {
      getProducts()
        .then((res) => {
          setItems(res);
        })
        .catch((error) => {
          error.log(error);
        });
    }
    return () => {
      setItems([]);
      setCategory(null);
    };
  }, [id]);

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
        <h1 className="itemListHeader">{category}</h1>
      ) : (
        <h1 className="itemListHeader">Todos los productos</h1>
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
