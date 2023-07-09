import { Col, Row } from "react-bootstrap";
import "./Brief.css";

export const Brief = ({ cart, orderTotal }) => {
  return (
    <div className="brief">
      <h1 className="item-list-header">Tu carrito</h1>
      {cart.map((item) => (
        <Row key={item.id} className="align-items-center">
          <Col>
            <img src={item.imgUrl} alt={item.title} className="img" />
          </Col>
          <Col>
            <h2>Producto</h2>
            <p>{item.title}</p>
          </Col>
          <Col>
            <h2>Precio</h2>
            <p>${item.price}</p>
          </Col>
          <Col>
            <h2>Cantidad</h2>
            <p>{item.quantity}</p>
          </Col>
        </Row>
      ))}
      {cart && (
        <Row className="total">
          <Col>
            <p>
              Total de tu compra: <strong>${orderTotal}</strong>
            </p>
          </Col>
        </Row>
      )}
    </div>
  );
};
