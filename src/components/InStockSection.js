import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import { Container } from '@material-ui/core';
import StockSearch from './StockSearch'
import ProductAddBtn from './ProductAddBtn'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'right',
//     color: theme.palette.text.secondary,
//   },
// }));

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      grid: {
        padding: theme.spacing(2),
        textAlign: 'right',
        color: theme.palette.text.secondary,
      }
    },
}));



export default function InStockSection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      {/* <Grid container>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <StockSearch/>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <ProductAddBtn/>
          </Paper>
        </Grid>
      </Grid> */}

    <div className={classes.root}>
        <Grid container>
          
            <Grid xs={6} >
                <StockSearch/>
            </Grid>
            <Grid xs={6} >
                <ProductAddBtn/>
            </Grid>
      </Grid>

        {/* <StockSearch/>
        <ProductAddBtn/> */}
    </div>
      
    </div>
  );
}