import { Grid, Container } from '@material-ui/core';

import InformationModal from './InformationModal'

import '../../../App.css'


// ----------------------------------------------------------------------

export default function InformationContainer() {
  return (
    
      <Container maxWidth="xl" className="containerPadding">

        <Grid container spacing={3}>

          <Grid item xs={12} sm={12} md={12} className="I_information_container_grid">
            <InformationModal />
          </Grid>
    
        </Grid>
      </Container>
    
  );
}
