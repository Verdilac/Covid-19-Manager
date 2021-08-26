// import faker from 'faker';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter
 } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    tableContainer: {
        borderRadius: 6,
        margin: '40px 15px',
        maxWidth: 950
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }
  }));


  // const rows = [
  //   { id: 1, name: 1, email: "menukapinto@gmail.com", phone: "0778555272", jobTitle: "Software Engineer", company: "WSO2", joinDate: "10-5-2020" },
  //   { id: 2, name: 1, email: "menukapinto@gmail.com", phone: "0778555272", jobTitle: "Software Engineer", company: "WSO2", joinDate: "10-5-2020" },
  //   { id: 3, name: 1, email: "menukapinto@gmail.com", phone: "0778555272", jobTitle: "Software Engineer", company: "WSO2", joinDate: "10-5-2020" },
  //   { id: 4, name: 1, email: "menukapinto@gmail.com", phone: "0778555272", jobTitle: "Software Engineer", company: "WSO2", joinDate: "10-5-2020" },
  //   { id: 5, name: 1, email: "menukapinto@gmail.com", phone: "0778555272", jobTitle: "Software Engineer", company: "WSO2", joinDate: "10-5-2020" },
  //   { id: 6, name: 1, email: "menukapinto@gmail.com", phone: "0778555272", jobTitle: "Software Engineer", company: "WSO2", joinDate: "10-5-2020" },
  //   { id: 7, name: 1, email: "menukapinto@gmail.com", phone: "0778555272", jobTitle: "Software Engineer", company: "WSO2", joinDate: "10-5-2020" },
  //   { id: 8, name: 1, email: "menukapinto@gmail.com", phone: "0778555272", jobTitle: "Software Engineer", company: "WSO2", joinDate: "10-5-2020" },
  //   { id: 9, name: 1, email: "menukapinto@gmail.com", phone: "0778555272", jobTitle: "Software Engineer", company: "WSO2", joinDate: "10-5-2020" },
  // ];


let USERS = [], STATUSES = ['In Stock', 'Pending', 'Out of Stock'];
for(let i=0;i<14;i++) {
    USERS[i] = {
        name: "Antiseptic wipe",
        description: "Alcohol hand sanitizer",
        quantity: "30,000",
        date: "25-8-2021",
        status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
    }
}

function MTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>Product Info</TableCell>
            <TableCell className={classes.tableHeaderCell}>Quantity</TableCell>
            <TableCell className={classes.tableHeaderCell}>Date</TableCell>
            <TableCell className={classes.tableHeaderCell}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {USERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.name}>
              <TableCell>
                  <Grid container>
                      <Grid item lg={2}>
                          <Avatar alt={row.name} src='.' className={classes.avatar}/>
                      </Grid>
                      <Grid item lg={10}>
                          <Typography className={classes.name}>{row.name}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.description}</Typography>
                          {/* <Typography color="textSecondary" variant="body2">{row.phone}</Typography> */}
                      </Grid>
                  </Grid>
                </TableCell>
              <TableCell>
                  <Typography color="primary" variant="subtitle2">{row.quantity}</Typography>
                  {/* <Typography color="textSecondary" variant="body2">{row.company}</Typography> */}
                </TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>
                  <Typography 
                    className={classes.status}
                    style={{
                        backgroundColor: 
                        ((row.status === 'In Stock' && 'green') ||
                        (row.status === 'Pending' && 'blue') ||
                        (row.status === 'Out of Stock' && 'orange'))
                    }}
                  >{row.status}</Typography>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
        <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={USERS.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default MTable;