import React from "react";
import { Button } from "@material-ui/core";
import PopupForm from "./PopupForm";
import { Grid } from "@material-ui/core";
import { createTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  space: {
    marginRight: 10,
    paddingTop: 0,
  },
  container: {
    marginTop: 10,
  },
}));

export default function BtnSetMain() {
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.container}>
        <Grid item md={9}>
          <PopupForm></PopupForm>
        </Grid>
      </Grid>
    </div>
  );
}
