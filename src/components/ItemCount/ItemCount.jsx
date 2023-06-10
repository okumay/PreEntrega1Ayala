import { useState } from "react";
import { Button } from "react-bootstrap";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [itemCount, setItemCount] = useState(initial);

  const addItem = () => {
    if (itemCount < stock) {
      setItemCount(itemCount + 1);
    }
  };

  const removeItem = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="add-remove-wrapper ">
        <Button
          size="sm"
          className="updateCart"
          onClick={removeItem}
          disabled={itemCount === 0 ? "disabled" : null}
        >
          -
        </Button>
        <p className="itemQty">{itemCount}</p>
        <Button
          size="sm"
          className="updateCart"
          onClick={addItem}
          disabled={itemCount === stock ? "disabled" : null}
        >
          +
        </Button>
      </div>
      <div>
        <Button
          size="sm"
          className="addToCart"
          onClick={() => onAdd(itemCount)}
          disabled={!stock}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export { ItemCount };
