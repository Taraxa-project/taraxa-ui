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
      fontFamily: "Roboto"
    }
  },
  palette: {
    text:{
      primary: "#000"
    },
    common: {
      black: "#000",
      white: "#fff"
    },
    background: {
      paper: "#fff",
      default: "#fafafa"
    },
    primary: {
      light: "rgba(89, 210, 188, 1)",
      main: "rgba(20, 160, 140, 1)",
      dark: "rgba(0, 113, 95, 1)",
      contrastText: "#fff"
    },
  }
});

export default theme;