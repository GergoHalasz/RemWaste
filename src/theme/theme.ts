import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2962FF",
    },
    secondary: {
      main: "#FF6D00",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5",
    },
  },
});

export default theme;
