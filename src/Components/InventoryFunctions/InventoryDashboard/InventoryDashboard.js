import React from 'react'

import '../Css/style.css'
// import '../../../App.css'

import NavBar from '../Navigation/NavBar';
import InformationContainer from '../Information/InformationContainer';
import Cards from '../Cards/Cards';
import FormDesign from '../Form/FormDesign';


// -----------------------------------------
// This is the Entire Inventory Dashboard
// -----------------------------------------

export default function InventoryDashboard() {
    return (

        <div>
            <NavBar />
            <InformationContainer />
            <Cards />
            <FormDesign />
        </div>

    );
}
