import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

export default function AddProductForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <TextField
          id="standard-full-width"
          label="Product Name"
          style={{ marginTop: 18, paddingTop: 10 }}
          placeholder="Enter product name"
          
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="standard-full-width"
          label="Description"
          style={{ marginTop: 18, paddingTop: 10 }}
          placeholder="Enter the description"
          
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="standard-full-width"
          label="Status"
          style={{ marginTop: 18, paddingTop: 10 }}
          placeholder="Enter product status"
          
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="standard-full-width"
          label="Date"
          style={{ marginTop: 18, paddingTop: 10 }}
          placeholder="Enter date"
          
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="standard-full-width"
          label="Quantity"
          style={{ marginTop: 18, paddingTop: 10 }}
          placeholder="Enter quantity"
          
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </div>
  );
}
