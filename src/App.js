import { NavBar } from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './App.css';

function App() {

  return (
      <>
      <NavBar nombre = {"Ecommerce"}/>
      <ItemDetailContainer/>
      {/*<ItemListContainer mensaje = {"CATALOGO"}></ItemListContainer>*/}
    </>
  );
}

export default App;