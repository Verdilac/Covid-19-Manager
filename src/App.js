<<<<<<< HEAD
import PatientSystem from './Components/PatientSystem.js';

function App() {

  return (
    <div className="App">
      <PatientSystem />
    </div>
    //Kulaja
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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Overview from './Components/hospital-vacancy-management/Overview';
import Dashboard from './Components/qcm/Dashboard';
import VaccineApp from './Components/Vaccine-Administration/VaccineApp'

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#3f51b5",
//     },
//     secondary: red,
//   },
// });


function App (){
  return (

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
            <Route path="/vacancy">
              <Overview />
            </Route>
            <Route path="/quarantine">
              <Dashboard />
            </Route>
            <Route path="/vaccine">
              <VaccineApp />
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
>>>>>>> 2f24f8fabc05b84b15311740acbf3b6bb6871760
  );

}
export default App;