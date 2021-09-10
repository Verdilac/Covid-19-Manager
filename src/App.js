import React from "react";
import "./App.css";
import Main from "./Components/Main";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { purple } from "@material-ui/core/colors";
import "bootstrap/dist/css/bootstrap.min.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: red,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Main></Main>
      </div>
    </ThemeProvider>
  );
}

export default App;
