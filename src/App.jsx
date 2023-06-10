import { NavBar, ItemListContainer, ItemDetailContainer } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer greeting="Bienvenidxs al Emporio Retro! Cargando lista de productos..." />
          }
        />
        <Route
          path="/category/:id"
          element={<ItemListContainer greeting="Cargando lista de productos" />}
        />
        <Route
          path="/item/:id"
          element={
            <ItemDetailContainer greeting="Cargando detalle de producto" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
