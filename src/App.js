
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

//Hospital Vacancy Management Imports :
import Overview from './Components/hospital-vacancy-management/Overview';
import HCreate from './Components/hospital-vacancy-management/Create';
import HShow from './Components/hospital-vacancy-management/Show';
import HEdit from './Components/hospital-vacancy-management/Edit';

//Admin Dashboard Imports :
import AdminDashboard from './Components/AdminDashboard/Dashboard';
import AdminCreate from './Components/AdminDashboard/Create';
import AdminEdit from './Components/AdminDashboard/Edit';
import AdminShow from './Components/AdminDashboard/Show'; 

import Dashboard from './Components/qcm/Dashboard';
import QCreate from './Components/qcm/Create';
import QEdit from './Components/qcm/Edit';
import QShow from './Components/qcm/Show';

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
            //Hospital Vacancy Management Routes :
            <Route path="/vacancy"> <Overview /> </Route>
            <Route path="/HCreate"> <HCreate /> </Route>
            <Route path="/HShow/:id" component={HShow} />
            <Route path="/HEdit/:id" component={HEdit} />

            //Admin Dashboard Routes :
            <Route path="/adminDashboard"> <AdminDashboard /> </Route>
            <Route path="/AdminCreate"> <AdminCreate /> </Route>
            <Route path="/AdminShow/:id" component={AdminShow} />
            <Route path="/AdminEdit/:id" component={AdminEdit} />


            <Route path="/quarantine">  <Dashboard /> </Route>
            <Route path="/QCreate"> <QCreate />  </Route>
            <Route path="/QEdit/:id" component={QEdit} />  
            <Route path="/QShow/:id" component={QShow} />  

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
  );

}

export default App;
