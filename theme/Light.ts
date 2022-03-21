import { createTheme } from '@mui/material';
import { deepPurple,indigo  } from '@mui/material/colors';

export const LightTheme= createTheme({
  palette: {
    primary: {
      main: deepPurple[700],
      dark: deepPurple[800],
      light: deepPurple[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: indigo[500],
      dark: indigo[400],
      light: indigo[300],
      contrastText: '#ffffff',
    },
    background: {
      paper: '#ffffff',
      default: '#8A2AE3',
    }
  }
});