import {
  Col,
  Container,
  Image,
  Modal,
  Row,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategoryName } from "../../assets/asyncMock";

const ItemDetail = ({
  id,
  title,
  price,
  description,
  imgUrl,
  stock,
  catId,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [qty, setQty] = useState(null);

  useEffect(() => {
    let categoryName = getCategoryName(catId).toLowerCase();
    if (qty === 1) {
      categoryName = categoryName.match(/^(.*)(?:s)$/)[1];
    }
    setCategory(categoryName);
  }, [qty, catId]);

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
            <p className="price">${price}</p>
            <ItemCount
              className="itemCount"
              initial={0}
              stock={stock}
              onAdd={(q) => {
                setQty(q);
                setShowToast(true);
              }}
            />
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
      <ToastContainer position="bottom-center">
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={2000}
          autohide
        >
          <Toast.Body>
            Agregaste {qty} {category} al carrito
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export { ItemDetail };
