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
    if (itemCount > 1) {
      setItemCount(itemCount - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="add-remove-wrapper">
        <Button
          size="sm"
          variant="light"
          className="update-cart decrease-qty"
          onClick={removeItem}
          disabled={itemCount < 2 ? "disabled" : null}
        >
          -
        </Button>
        <input
          value={itemCount}
          className="item-qty"
          onChange={(e) => {
            setItemCount(e.target.value);
          }}
          onFocus={(e) => e.target.select()}
          onBlur={(e) => {
            if (e.target.value < 2) setItemCount(1);
            else if (e.target.value > stock) setItemCount(stock);
          }}
        />
        <Button
          size="sm"
          variant="light"
          className="update-cart increase-qty"
          onClick={addItem}
          disabled={itemCount >= stock ? "disabled" : null}
        >
          +
        </Button>
      </div>
      <div>
        <Button
          size="sm"
          className="add-to-cart"
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
