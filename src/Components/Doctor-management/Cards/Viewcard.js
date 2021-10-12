import React from 'react';
import './Viewcards.css';
import { Grid, Container } from '@material-ui/core';

import Total_doc from './Total_doc';
import Assigned_doctors from './Assigned_doctors';
import Revoked_doc from './Revoked_doc';
import Total_patients from './Available_doc';

function Viewcard() {
    return ( <div>
        <Container maxWidth="xl" className="containerPadding">
    
        <Grid container spacing={3}>
        <Grid item xs={12} sm={7} md={3}>
            <Total_doc />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Assigned_doctors/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Total_patients/>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Revoked_doc />
        </Grid>
        </Grid>

</Container>

        </div>
    )
}

export default Viewcard
