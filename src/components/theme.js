import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Comic Sans MS"
    },
    h2: {
      fontFamily: "Arial"
    },
    h3: {
      fontFamily: "Times New Roman"
    },
    h4: {
      fontFamily: "Poppins"
    },
    button: {
      fontFamily: "Roboto"
    }
  },
  palette: {
    text:{
      primary: "#FF5733"
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