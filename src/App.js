import { CssBaseline } from '@mui/material';
import { NavBar } from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

import './App.css';

function App() {

  return (
      <><CssBaseline>
      <NavBar nombre = {"Ecommerce"}/>
    </CssBaseline>
    <ItemListContainer mensaje = {"CATÁLOGO"} /></>
  );
}

export default App;