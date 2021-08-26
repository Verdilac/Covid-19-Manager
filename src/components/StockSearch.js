/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogActions from '@material-ui/core/DialogActions';
// import Button from '@material-ui/core/Button';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';

const filter = createFilterOptions();

export default function StockSearch() {
  const [value, setValue] = React.useState(null);
  const [open, toggleOpen] = React.useState(false);

  const handleClose = () => {
    setDialogValue({
      title: '',
      year: '',
    });

    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    title: '',
    year: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue({
      title: dialogValue.title,
      year: parseInt(dialogValue.year, 10),
    });

    handleClose();
  };

  return (
    <React.Fragment>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            // timeout to avoid instant validation of the dialog's form.
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                title: newValue,
                year: '',
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
              title: newValue.inputValue,
              year: '',
            });
          } else {
            setValue(newValue);
          }
        }}
        
        id="free-solo-dialog-demo"
        options={productNames}
        getOptionLabel={(option) => {

          if (typeof option === 'string') {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.title;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(option) => option.title}
        style={{ width: 300, paddingTop: 30 }}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label="Search Product" variant="outlined" />
        )}
      />
    </React.Fragment>
  );
}

const productNames = [
  { title: 'Venturi mask'},
  { title: 'Self-refilling Ventilation bag'},
  { title: 'Oropharyngeal'},
  { title: 'Syringe 10 mL'},
  { title: 'Endotracheal Tube Introducer'},
  { title: 'Arterial blood sample kits'},
  { title: 'Central venous catheters kit'},
  { title: 'Conductive gel'},
  { title: 'Antiseptic wipe with alcohol and chlorhexidine'},
  { title: 'Respirator masks (i.e. N95, FPP2)'},
  { title: 'Face shield'},
  { title: 'Surgical gowns (sterile)'}
];
