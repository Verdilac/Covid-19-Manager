import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

class ListHospital extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hospitals: [],
            message: null
        }
        this.deleteHospital = this.deleteHospital.bind(this);
        this.editHospital = this.editHospital.bind(this);
        this.addHospital = this.addHospital.bind(this);
        this.reloadHospitalList = this.reloadHospitalList.bind(this);
    }

    componentDidMount() {
        this.reloadHospitalList();
    }

    reloadHospitalList() {
        ApiService.fetchHospitals()
            .then((res) => {
                this.setState({hospitals: res.data.result})
            });
    }

    deleteHospital(hospitalId) {
        ApiService.deleteHospital(hospitalId)
           .then(res => {
               this.setState({message : 'Hospital deleted successfully.'});
               this.setState({hospitals: this.state.hospitals.filter(hospital => hospital.id !== hospitalId)});
           })
    }

    editHospital(id) {
        window.localStorage.setItem("hospitalId", id);
        this.props.history.push('/edit-hospital');
    }

    addHospital() {
        window.localStorage.removeItem("hospitalId");
        this.props.history.push('/add-hospital');
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Hospital Details</Typography>
                <Button variant="contained" color="primary" onClick={() => this.addHospital()}>
                    Add Hospital
                </Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>FirstName</TableCell>
                            <TableCell align="right">LastName</TableCell>
                            <TableCell align="right">HospitalName</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Salary</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.hospitals.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.firstName}</TableCell>
                                <TableCell align="right">{row.lastName}</TableCell>
                                <TableCell align="right">{row.hospitalname}</TableCell>
                                <TableCell align="right">{row.age}</TableCell>
                                <TableCell align="right">{row.salary}</TableCell>
                                <TableCell align="right" onClick={() => this.editHospital(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="right" onClick={() => this.deleteHospital(row.id)}><DeleteIcon /></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        );
    }

}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default ListHospital;