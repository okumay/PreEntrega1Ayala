import { NavBar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Category, Checkout, Item } from "./pages";
import { CartProvider } from "./context";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar itemCount="0" />
        <Routes>
          <Route
            path="/"
            element={
              <Category greeting="Bienvenidxs al Emporio Retro! Cargando lista de productos..." />
            }
          />
          <Route
            path="/category/:id"
            element={<Category greeting="Cargando lista de productos" />}
          />
          <Route
            path="/item/:slug"
            element={<Item greeting="Cargando detalle de producto" />}
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
