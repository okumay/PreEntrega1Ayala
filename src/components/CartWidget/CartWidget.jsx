import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => (
  <div className="shoppingCart">
    <Link to="/cart">
      <ShoppingCartIcon />
      <span className="itemCounter">3</span>
    </Link>
  </div>
);

export { CartWidget };
