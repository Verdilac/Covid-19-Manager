import React from 'react';
import './Main.css';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import DocTables from './Tables/DocTables';
import AssignDoc from './Tables/AssignDoc';
import DocTable from './Tables/DocTable';

function DoctorManagement (){
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/register" component={AssignDoc} />
        <Route exact path="/" component={DocTable} />
      </Switch>
    </Router>
    <DocTables />
    </div> //Praveen

  );

}
export default DoctorManagement;