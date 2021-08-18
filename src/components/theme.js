import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: [
        'Poppins',
        'sans-serif',
      ].join(','),
    },
    h2: {
      fontFamily: [
        'Poppins',
        'sans-serif',
      ].join(','),
    },
    h3: {
      fontFamily: [
        'Poppins',
        'sans-serif',
      ].join(','),
    },
    h4: {
      fontFamily: [
        'Poppins',
        'sans-serif',
      ].join(','),
    },
    h5: {
      fontFamily: [
        'Poppins',
        'sans-serif',
      ].join(','),
    },
    h6: {
      fontFamily: [
        'Poppins',
        'sans-serif',
      ].join(','),
    },
    button: {
      fontFamily: "Inter",
      fontSize: 12,
    },
    fontFamily: "Inter",
  },
  palette: {
    primary: {
      main: '#FFF',
    },
    secondary: {
      main: '#15AC5B',
      contrastText: "#fff"
    },
    text: {
      secondary: '#878CA4',
    },
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#282C3E",
        color: "#FFF"
      },
      fontFamily: 'Inter'
    },
    MuiCssBaseline:  {
      '@global': {
        '*::-webkit-scrollbar': {
          width: '0.8em'
        },
        '*::-webkit-scrollbar-track': {
          '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
          borderRadius: "10px",
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#878CA4',
        }
      }
    }
  },
});

export default theme;