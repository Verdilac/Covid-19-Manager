import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        left: '20px',
      },
    },
  }));

function BasicTextFields() {
    const classes = useStyles();
        return (
            <header classname="header">
                <div className="h_con">
                    <div className="row">
                        <div className="col-6">
                            <div className="header__content">
                                <div className="header__section">
                                    <div className="list">
                                        <h4>Explore Doctors</h4>
                                        <p>Find the best doctors in any department in any hospital
                                             and make your appointments</p>
                                        
                                        <form className={classes.root} noValidate autoComplete="off">
                                            <TextField id="standard-basic" label="Search" />
                                        </form>
                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

export default BasicTextFields


