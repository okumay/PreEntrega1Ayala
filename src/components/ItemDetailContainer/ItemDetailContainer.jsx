import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { getProductById } from "../../assets/asyncMock";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Spinner } from "react-bootstrap";

const ItemDetailContainer = ({ greeting }) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        setItem(res);
      })
      .catch((error) => {
        error.log(error);
      });
    return () => {
      setItem(null);
    };
  }, [id]);

  if (!item) {
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
    <div className="itemDetailContainer">
      <ItemDetail {...item} />
    </div>
  );
};

export { ItemDetailContainer };
