import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  return (
    <div className="container-fluid">
      <NavBar></NavBar>
      <ItemListContainer greeting="Te damos la bienvenida al Emporio Retro!"></ItemListContainer>
    </div>
  );
}

export default App;
