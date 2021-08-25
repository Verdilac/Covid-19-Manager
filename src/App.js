import React from 'react';
import logo from './logo.svg';
import './App.css';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PersistentDrawerLeft from './components/AppBars/PersistentDrawerLeft';
import AppBar from './components/AppBars/AppBar';
import AppBarLogin from './components/AppBars/AppBarLogin';
import AppBarSearch from './components/AppBars/AppBarSearch';
import Dashboard from './components/Dashboard/Dashboard';
import Orders from './components/Dashboard/Orders';
import Typography from '@material-ui/core/Typography';
import Deposits from './components/Dashboard/Deposits';
import ScoreCard from './components/Dashboard/ScoreCard';

const useStyles = makeStyles((theme) => ({

  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 120,
  },
}));

function App() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <>
    <AppBarSearch/>
    <main>
      <header>
        <CssBaseline/>
        <div/>
        <Container maxWidth="false" className={classes.container}>
          <Grid container item xs={10} spacing={3}>
           
            {/* Recent Deposits */}
            <Grid item xs={10} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <ScoreCard/>
              </Paper>
            </Grid>

            <Grid item xs={10} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <ScoreCard/>
              </Paper>
            </Grid>

            <Grid item xs={10} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <ScoreCard/>
              </Paper>
            </Grid>

            <Grid item xs={10} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <ScoreCard/>
              </Paper>
            </Grid>

            <Grid item xs={10} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <ScoreCard/>
              </Paper>
            </Grid>

          </Grid>
        </Container>
        <div>
          {/*<h1>Test Div</h1>
          <Typography variant="h5">Hello World</Typography>*/}
        </div>
    </header>
    </main>
    
    </>
  );
}

export default App;
 
/* Chart {/*
            {/*<Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid>*/