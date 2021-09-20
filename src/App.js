import React from "react";
import "./App.css";
import TravelManagement from "./Components/TravelFunction/TravelManagement";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { purple } from "@material-ui/core/colors";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import NavBar from "./Components/TravelFunction/NavBar";

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
      <NavBar />
      <div className="App">
        <TravelManagement></TravelManagement>
      </div>
    </ThemeProvider>
  );
}

export default App;
