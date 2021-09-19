import { Grid, Container } from '@material-ui/core';
import InsertForm from './Product_Insert_Form';
import ProductTable from '../Table/ProductTable';

import "../../App.css";


// ----------------------------------------------------------------------

export default function FormDesign() {
  return (
    
      <Container maxWidth="xl" className="containerPadding">

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} className="I_inset_form">
            
            {/* --- Inserting Form START---- */}
            <InsertForm />
            {/* --- Inserting Form END---- */}

          </Grid>
          <Grid item xs={12} sm={6} md={6}>

           {/* --- Updating Form START---- */}
           <ProductTable />
            {/* --- Updating Form END---- */}

          </Grid>
          <Grid item xs={12} sm={6} md={12}>

            {/* --- Updating Form START---- */}
            {/* <ProductTable /> */}
            {/* --- Updating Form END---- */}

          </Grid>

        </Grid>

      </Container>
    
  );
}
