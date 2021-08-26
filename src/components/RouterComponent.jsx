import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListHospital from "./Hospital/ListHospital";
import AddHospital from "./Hospital/AddHospital";
import EditHospital from "./Hospital/EditHospital";
import React from "react";

const AppRouter = () => {
    return(
        <div style={style}>
            <Router>
                    <Switch>
                        <Route path="/hospitals" exact component={ListHospital} />
                        <Route path="/add-hospital" component={AddHospital} />
                        <Route path="/edit-hospital" component={EditHospital} />
                    </Switch>
            </Router>
        </div>
    )
}

const style={
    marginTop:'20px'
}

export default AppRouter;