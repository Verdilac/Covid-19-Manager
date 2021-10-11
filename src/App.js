import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import DocTables from '../src/Components/Doctor-management/Tables/DocTables';
import AssignDoc from '../src/Components/Doctor-management/Tables/AssignDoc';
import DocTable from '../src/Components/Doctor-management/Tables/DocTable';


function App (){
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
export default App;