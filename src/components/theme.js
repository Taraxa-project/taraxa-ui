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
  }
});

export default theme;