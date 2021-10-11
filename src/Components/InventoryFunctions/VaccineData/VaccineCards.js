import { Grid, Container } from '@material-ui/core';

import VaccineCount from './Vaccine_Count_Card'
import VaccineInfo from './Vaccine_Info_Card'


// ----------------------------------------------------------------------

export default function VaccineCards() {
  return (
    
      <Container maxWidth="xl" className="containerPadding">

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <VaccineCount />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <VaccineInfo />
          </Grid>
        </Grid>

      </Container>
    
  );
}
