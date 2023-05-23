import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer greeting="Te damos la bienvenida al Emporio Retro!"></ItemListContainer>
    </>
  );
}

export default App;
