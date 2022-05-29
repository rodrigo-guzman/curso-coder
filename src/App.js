import { NavBar } from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cart from './components/Cart';
import ContextCartProvider from './contexts/ContextCart';
import FirebaseDoc from './components/FirebaseDoc';
import './App.css';
import FirebaseDocs from './components/FirebaseDocs';

function App() {

  return (
      <>
      <ContextCartProvider>
        <BrowserRouter>
        <NavBar nombre = {"Ecommerce"}/>
        <Routes>
          <Route path="/" element = {<ItemListContainer mensaje = {"CATALOGO"}/>}></Route>
          <Route path="/category/:categoryId" element = {<ItemListContainer mensaje = {"CATALOGO"}/>}></Route>
          <Route path="/ItemDetailContainer/:idProduct" element = {<ItemDetailContainer/>}></Route>
          <Route path="/doc" element = {<FirebaseDoc />}></Route>
          <Route path="/docs" element = {<FirebaseDocs />}></Route>
          <Route path="/cart" element = {<Cart/>}></Route>
          <Route path="*" element = {<h1>ERROR 404</h1>}></Route>
        </Routes>
        </BrowserRouter>
      </ContextCartProvider>
    </>
  );
}

export default App;