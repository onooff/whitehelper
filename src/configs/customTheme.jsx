import { createTheme } from '@mui/material/styles';
import '../index.css';
export const customTheme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Pretendard',
  },
});
