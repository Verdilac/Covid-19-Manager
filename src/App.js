<<<<<<< HEAD
import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import DocTables from '../src/Components/Tables/DocTables';
import AssignDoc from './Components/Tables/AssignDoc';
import DocTable from './Components/Tables/DocTable';
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
>>>>>>> origin/integration


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
<<<<<<< HEAD
    <div>
    <Router>
      <Switch>
        <Route exact path="/register" component={AssignDoc} />
        <Route exact path="/" component={DocTable} />
      </Switch>
    </Router>
    <DocTables />
    
    </div> //Praveen
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
            <Route path="/vacancy">
              <Overview />
            </Route>
            <Route path="/quarantine">
              <Dashboard />
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
>>>>>>> origin/integration
  );

}

export default App;