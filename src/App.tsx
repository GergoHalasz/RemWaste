import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import './App.css'
import SkipSelection from "./components/SkipSelection";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SkipSelection />
    </ThemeProvider>
  )
}

export default App
