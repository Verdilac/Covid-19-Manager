<<<<<<< HEAD
import React from 'react';
import './App.css';
import Overview from './components/hospital-vacancy-management/Overview';
=======
import React from "react";
import "./App.css";
import TravelManagement from "./Components/TravelFunction/TravelManagement";
import InventoryDashboard from "./Components/InventoryFunctions/InventoryDashboard/InventoryDashboard";
// import { createTheme, ThemeProvider } from "@material-ui/core";
// import { red } from "@material-ui/core/colors";
// import { purple } from "@material-ui/core/colors";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useState } from "react";
import NavBar from "./Components/TravelFunction/NavBar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#3f51b5",
//     },
//     secondary: red,
//   },
// });
>>>>>>> origin/integration

function App (){
  return (
<<<<<<< HEAD
    
  )
=======
    // <ThemeProvider theme={theme}>
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <TravelManagement />
            </Route>
            <Route path="/inventory">
              <InventoryDashboard />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>



    // <div>
    //   <NavBar />
    //   <div className="App">
    //     {/* <TravelManagement></TravelManagement> */}
    //     <TravelManagement></TravelManagement>
    //     {/* <InventoryDashboard /> */}
    //   </div>
    // </div>

    // </ThemeProvider>
  );
>>>>>>> origin/integration
}

export default App;