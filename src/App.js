import React from "react";
import "./App.css";
import Main from "./Components/Main";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { purple } from "@material-ui/core/colors";
import FirebaseDBConfig from "./FirebaseDBConfig";

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
      <FirebaseDBConfig></FirebaseDBConfig>
    </ThemeProvider>
  );
}

export default App;
