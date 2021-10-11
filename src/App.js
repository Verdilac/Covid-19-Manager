import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import DocTables from '../src/Components/Tables/DocTables';
import AssignDoc from './Components/Tables/AssignDoc';
import DocTable from './Components/Tables/DocTable';

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