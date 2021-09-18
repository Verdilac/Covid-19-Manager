import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function ScoreCard() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>COVID-19 Treatment Wards</Title>
      {/*<Typography component="p" variant="h4">
        4500
      </Typography>*/}
    </React.Fragment>
  );
}