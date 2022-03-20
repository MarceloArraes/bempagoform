import { LightTheme} from '../theme/Light';
import { DarkTheme} from '../theme/Dark';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';

interface InterfThemeContextData {
  themeChoice: 'light' | 'dark';
  changeTheme: () => void;
}

const ThemeContext = createContext({} as InterfThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
}

export const AppThemeProvider: React.FC = ({ children }) => {
  const [themeChoice, setThemeChoice] = useState<'light' | 'dark'>('light');

  const changeTheme = useCallback(() => {
    setThemeChoice(oldthemeChoice => oldthemeChoice === 'light' ? 'dark' : 'light');
  }, []);

  const theme = useMemo(() => {
    if (themeChoice === 'light') return LightTheme;

    return DarkTheme;
  }, [themeChoice]);


  return (
    <ThemeContext.Provider value={{ themeChoice, changeTheme }}>
      <ThemeProvider theme={theme}>
        <Box  sx={{
          margin: 0,
          padding: 0,
          width:"100vw",
          height:"100vh",
          backgroundColor:theme.palette.background.default,
          backgroundSize: 'cover',
          backgroundBlendMode: 'multiply',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}