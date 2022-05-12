import { CssBaseline, ThemeProvider } from '@mui/material';
import { NavBar } from './components/NavBar';
import { darkTheme } from './themes/dark-theme';

import './App.css';

function App() {

  return (
      <CssBaseline>
        <NavBar />
      </CssBaseline>
  );
}

export default App;