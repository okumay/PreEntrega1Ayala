import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context";

import "./CartWidget.css";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const [itemCount, setItemCount] = useState(0);

  const getItemCount = (cart) => {
    const itemsAdded = cart.reduce((acc, item) => acc + item.quantity, 0);
    setItemCount(itemsAdded);
  };

  useEffect(() => {
    getItemCount(cart);
  }, [cart]);

  return (
    <div className="shopping-cart">
      <Link to="/checkout">
        <ShoppingCartIcon />
        {itemCount ? (
          <span className="item-counter">{itemCount}</span>
        ) : (
          <span className="item-counter" />
        )}
      </Link>
    </div>
  );
};

export { CartWidget };
