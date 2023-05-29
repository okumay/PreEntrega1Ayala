import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  return (
    <div className="container-fluid">
      <NavBar />
      <ItemListContainer greeting="Te damos la bienvenida al Emporio Retro!" />
    </div>
  );
}

export default App;
