
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
import PrivateRoute from './Components/UserAccess/Auth/PrivateRoute';

//Hospital Vacancy Management Imports :
import Overview from './Components/hospital-vacancy-management/Overview';
import HCreate from './Components/hospital-vacancy-management/Create';
import HShow from './Components/hospital-vacancy-management/Show';
import HEdit from './Components/hospital-vacancy-management/Edit';
import HBCreate from './Components/hospital-vacancy-management/hospital-beds/Create';

//Admin Dashboard Imports :
import AdminDashboard from './Components/AdminDashboard/Dashboard';
import AdminCreate from './Components/AdminDashboard/Create';
import AdminEdit from './Components/AdminDashboard/Edit';
import AdminShow from './Components/AdminDashboard/Show';

//User Access Imports :
import UserAccessViewProfile from './Components/UserAccess/Auth/ViewProfile';
import UserAccessUpdateProfile from './Components/UserAccess/Auth/UpdateProfile';
import UserAccessForm from './Components/UserAccess/Auth/Form';
import UserAccessSignUp from './Components/UserAccess/Auth/Signup';
import UserAccessLogin from './Components/UserAccess/Auth/Login';
import UserAccessForgotPassword from './Components/UserAccess/Auth/ForgotPassword';

import { AuthProvider } from "./Components/UserAccess/Contexts/AuthContext";
import { Container } from "react-bootstrap"

//Quarantine Center Management Imports :
import QuarantineDashboard from './Components/qcm/Dashboard';
import QCreate from './Components/qcm/Create';
import QEdit from './Components/qcm/Edit';
import QShow from './Components/qcm/Show';

import VaccineApp from './Components/Vaccine-Administration/VaccineApp';

import DoctorManagement from './Components/Doctor-management/Main';

import DocTable from './Components/Doctor-management/Tables/DocTable';
import AssignDoc from './Components/Doctor-management/Tables/AssignDoc';
import PatientSystem from './Components/Patient-Management/PatientSystem';

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
        <AuthProvider>
          <Switch>
            <Route exact path="/">
              <TravelManagement />
            </Route>
            <Route path="/inventory">
              <InventoryDashboard />
            </Route>
            //Hospital Vacancy Management Routes :
            <PrivateRoute path="/vacancy" component={Overview} />
            <PrivateRoute path="/HCreate" component={HCreate} />
            <PrivateRoute path="/HShow/:id" component={HShow} />
            <PrivateRoute path="/HEdit/:id" component={HEdit} />
            <PrivateRoute path="/HBCreate" component={HBCreate} />

            //Admin Dashboard Routes :
            <PrivateRoute path="/adminDashboard" component={AdminDashboard} />
            <PrivateRoute path="/AdminCreate" component={AdminCreate} />
            <PrivateRoute path="/AdminShow/:id" component={AdminShow} />
            <PrivateRoute path="/AdminEdit/:id" component={AdminEdit} />

            
            //Quarantine Center Management Router :
            <PrivateRoute path="/quarantine" component={QuarantineDashboard} />
            <PrivateRoute path="/QCreate" component={QCreate} /> 
            <PrivateRoute path="/QEdit/:id" component={QEdit} />  
            <PrivateRoute path="/QShow/:id" component={QShow} />  

            <Route path="/vaccine">
              <VaccineApp />
            </Route>

            <Route path="/patient">
              <PatientSystem />
            </Route>

    
              <Route exact path="/register" component={AssignDoc} />
              <Route exact path="/doctor" component={DocTable} />


            //User Access Routes :
            <Container
              className="d-flex align-items-center justify-content-center"
              style={{ minHeight: "100vh" }}
            >
            <div className="w-100" style={{ maxWidth: "400px" }}>
            <Route path="/form" component={UserAccessForm} />
            <PrivateRoute path="/view-profile" component={UserAccessViewProfile} />
            <PrivateRoute path="/update-profile" component={UserAccessUpdateProfile} />
            <Route path="/signup" component={UserAccessSignUp} />
            <Route path="/login" component={UserAccessLogin} />
            <Route path="/forgot-password" component={UserAccessForgotPassword} />
            </div>
            </Container>




          </Switch>
          </AuthProvider>  
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
