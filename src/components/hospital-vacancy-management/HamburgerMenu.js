import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
//import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
//import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';


const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));

export default function NavSideBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <List>
          <ListItem>
              <ListItemIcon> <LocalHospitalIcon /> </ListItemIcon>
              <ListItemText>Hospital Management</ListItemText>
          </ListItem>

          <ListItem>
              <ListItemIcon> <LocalHospitalIcon /> </ListItemIcon>
              <ListItemText>Room Management</ListItemText>
          </ListItem>

          <ListItem>
              <ListItemIcon> <LocalHospitalIcon /> </ListItemIcon>
              <ListItemText>ICU Bed Management</ListItemText>
          </ListItem>

          <ListItem>
              <ListItemIcon> <LocalHospitalIcon /> </ListItemIcon>
              <ListItemText>QC Transfer Arrivals</ListItemText>
          </ListItem>
      </List>

      {/*<Divider />*/}
    </div>
  );

//   onClick={toggleDrawer(anchor, true)}

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton edge="start" onClick={toggleDrawer(anchor, true)} className={classes.menuButton} color="inherit" aria-label="menu"><MenuIcon /></IconButton>
          
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
