import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from "./Create";
import Edit from "./Edit";
import Show from "./Show";
import Overview from './Overview';

import React from "react";

const AppRouter = () => {
    return(
        <div style={style}>
            <Router>
                    <Switch>
                        <Route path="/" exact component={} />
                        <Route path="/Create" component={Create} />
                        <Route path="/Edit" component={Edit} />
                        <Route path="/Show" component={Show} />
                        <Route path="/Overview" component={Overview}/>
                    </Switch>
            </Router>
        </div>
    )
}

const style={
    marginTop:'20px'
}

export default AppRouter;