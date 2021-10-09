import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

import MenuAppBar from './AppBarMenu';
import BtnLayout from './BtnLayout';
import PatientDash from './PatientDash';

const PatientSystem = () => {
 return (
        <div>
            <MenuAppBar/>
            <PatientDash/>
            <BtnLayout/>
        </div>
    )
};

export default PatientSystem;