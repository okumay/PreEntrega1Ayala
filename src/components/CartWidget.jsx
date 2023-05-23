import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => (
  <div className="shoppingCart">
    <a href="#cart">
      <ShoppingCartIcon></ShoppingCartIcon>
      <span className="itemCounter">3</span>
    </a>
  </div>
);

export { CartWidget };
