import React from 'react';
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
import Typography from '@material-ui/core/Typography';
import ScoreCard from './components/Dashboard/ScoreCard';
import Chart from './components/Dashboard/Chart';
import GaugeChart from 'react-gauge-chart'

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
  fixedHeightChart: {
    height: 360,
  },
}));

function App() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightChart = clsx(classes.paper, classes.fixedHeightChart);

  return (
    <>
    <AppBarSearch/>
    <main>
      <header>
        <CssBaseline/>
        <div/>
        <Container maxWidth="false" className={classes.container}>
          <Grid container spacing={3}>
           
            {/* Recent Deposits */}
            <Grid item xs>
              <Paper className={fixedHeightPaper}>
                <ScoreCard/>
              </Paper>
            </Grid>

            <Grid item xs>
              <Paper className={fixedHeightPaper}>
                <ScoreCard/>
              </Paper>
            </Grid>

            <Grid item xs>
              <Paper className={fixedHeightPaper}>
                <ScoreCard/>
              </Paper>
            </Grid>

            <Grid item xs>
              <Paper className={fixedHeightPaper}>
                <ScoreCard/>
              </Paper>
            </Grid>

            <Grid item xs>
              <Paper className={fixedHeightPaper}>
                <ScoreCard/>
              </Paper>
            </Grid>
          </Grid>

          <Grid container  spacing={3}>

            <Grid item lg={4}>
              <Paper className={fixedHeightChart}>

              <Grid container direction="column" justifyContent="space-evenly" alignItems="center" lg={12} spacing={3}>

              <Grid item lg={6}>
                <GaugeChart id="gauge-chart2.0" 
                  nrOfLevels={6} 
                  percent={0.86}
                  textColor	= "111111" 
                  width = '50%'
                  height = "180"
                />
                <Typography variant="subtitle2">% of Hospital Beds Used</Typography>
              </Grid>

              <Grid item lg={6}>
                <GaugeChart id="gauge-chart2.1" 
                  nrOfLevels={6} 
                  percent={0.86}
                  textColor	= "111111" 
                  width = '50%'
                  height = "180"
                />
                <Typography variant="subtitle2">% of ICU Beds Used</Typography>
              </Grid>
              </Grid>    

              </Paper>
            </Grid>

            <Grid item xs={12} md={8} lg={8}>
              <Paper className={fixedHeightChart}>
                <Chart />
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