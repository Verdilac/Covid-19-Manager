import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

import RemovePatient from './RemovePatient';
import AddPatient from './AddPatient';
import ViewPatient from './ViewPatient';

const BtnLayout = () => {
 return (
        <div>
            <RemovePatient/>
            <AddPatient/>
            <ViewPatient/>
        </div>
    )
};

export default BtnLayout;