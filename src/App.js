import { NavBar } from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import './App.css';

function App() {

  return (
      <>
      <NavBar nombre = {"Ecommerce"}/>
      <ItemListContainer mensaje = {"CATALOGO"}></ItemListContainer>
    </>
  );
}

export default App;