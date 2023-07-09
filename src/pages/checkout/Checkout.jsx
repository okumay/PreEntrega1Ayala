import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context";
import { Brief } from "../../components";
import { Button, Col, Form, Container, Modal, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Checkout.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

export const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [orderTotal, setOrderTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setOrderTotal(
      cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, [cart]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      buyerInfo: {
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        phone: e.target.elements.phone.value,
      },
      items: cart,
      total: orderTotal,
    };
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => {
      setOrderId(id);
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (orderId) {
      clearCart();
      navigate("/");
    }
  };

  return (
    <>
      <div className="main checkout">
        <Container fluid className="products">
          {!cart.length ? (
            <Row>
              <Col>
                <p>Tu carrito se encuentra vacío.</p>
              </Col>
            </Row>
          ) : (
            <Brief cart={cart} orderTotal={orderTotal} />
          )}
        </Container>
        <Container fluid className="buttons">
          <Row className="justify-content-md-center g-2" xs={1} md={3}>
            <Col md="auto">
              <Button as={Link} to="/">
                Agrega más productos
              </Button>
            </Col>
            {cart.length ? (
              <>
                <Col md="auto">
                  <Button variant="success" onClick={() => setShowModal(true)}>
                    Realizar compra
                  </Button>
                </Col>
                <Col md="auto">
                  <Button variant="danger" onClick={() => clearCart()}>
                    Vaciar carrito
                  </Button>
                </Col>
              </>
            ) : (
              ""
            )}
          </Row>
        </Container>
      </div>
      <Modal show={showModal} onHide={() => handleCloseModal()}>
        <Modal.Header closeButton>
          <Modal.Title>
            {!orderId ? "Por favor ingresá tus datos" : "Orden enviada!"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!orderId ? (
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Juan Pérez" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="ejemplo@dominio.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="phone" placeholder="011 5555-5555" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          ) : (
            <>
              <p>Gracias por comprar en Emporio Retro!</p>
              <p>
                Tu número de orden es: <strong>{orderId}</strong>
              </p>
            </>
          )}
        </Modal.Body>
        {orderId && (
          <Modal.Footer>
            <Button variant="outline-dark" onClick={() => handleCloseModal()}>
              Volver a la tienda
            </Button>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
};
