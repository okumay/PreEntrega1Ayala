import { Button, Col, Container, Image, Modal, Row } from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart/CartContext";

import "./ItemDetail.css";

const ItemDetail = ({ id, title, price, description, imgUrl, stock }) => {
  const [showModal, setShowModal] = useState(false);
  const [productAdded, setProductAdded] = useState(false);

  const { addItem, isInCart } = useContext(CartContext);

  const updateStock = (q) => {
    const item = {
      id,
      title,
      price,
      imgUrl,
    };

    addItem(item, q);
    setProductAdded(true);
  };

  useEffect(() => {
    if (isInCart(id)) {
      setProductAdded(true);
    }
  }, [id, isInCart]);

  return (
    <>
      <Container className="item" id={id}>
        <Row>
          <Col xs={12} md={4}>
            <Link to="#" onClick={() => setShowModal(true)}>
              <Image src={imgUrl} rounded />
            </Link>
          </Col>
          <Col xs={12} md={8}>
            <h1 className="title">{title}</h1>
            <p className="description">{description}</p>
            <p className="price">Precio: ${price}</p>
            {stock ? (
              <>
                <p className="stock">
                  Stock: {stock}u.
                  {stock === 1 && <span> (Último disponible!)</span>}
                </p>
                {!productAdded ? (
                  <ItemCount
                    className="itemCount"
                    initial={1}
                    stock={stock}
                    onAdd={(q) => {
                      updateStock(q);
                    }}
                  />
                ) : (
                  <div className="item-added">
                    <p>Tu item ya se encuentra en el carrito.</p>
                    <Button
                      as={Link}
                      to="/checkout"
                      variant="success"
                      className="to-cart"
                    >
                      Ver carrito
                    </Button>
                    <Button as={Link} to="/" variant="primary">
                      Seguir comprando
                    </Button>
                  </div>
                )}{" "}
              </>
            ) : (
              <>
                <p className="stock no-stock">Sin stock</p>
                <Button as={Link} variant="primary" to="/">
                  Seguir comprando
                </Button>
              </>
            )}
          </Col>
        </Row>
      </Container>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Image src={imgUrl} rounded />
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export { ItemDetail };
