import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class EditHospital extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            firstName: '',
            lastName: '',
            age: '',
            salary: '',
        }
        this.saveHospital = this.saveHospital.bind(this);
        this.loadHospital = this.loadHospital.bind(this);
    }

    componentDidMount() {
        this.loadHospital();
    }

    loadHospital() {
        ApiService.fetchHospitalById(window.localStorage.getItem("hospitalId"))
            .then((res) => {
                let hospital = res.data.result;
                this.setState({
                id: hospital.id,
                hospitalname: hospital.hospitalname,
                firstName: hospital.firstName,
                lastName: hospital.lastName,
                age: hospital.age,
                salary: hospital.salary,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveHospital = (e) => {
        e.preventDefault();
        let hospital = {id: this.state.id, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, salary: this.state.salary};
        ApiService.editHospital(hospital)
            .then(res => {
                this.setState({message : 'Hospital added successfully.'});
                this.props.history.push('/hospitals');
            });
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Edit Hospital</Typography>
                <form>

                        <TextField type="text" placeholder="hospitalname" fullWidth margin="normal" name="hospitalname" readonly="true" value={this.state.hospitalname}/>

                        <TextField placeholder="First Name" fullWidth margin="normal" name="firstName" value={this.state.firstName} onChange={this.onChange}/>

                        <TextField placeholder="Last name" fullWidth margin="normal" name="lastName" value={this.state.lastName} onChange={this.onChange}/>

                        <TextField type="number" placeholder="age" fullWidth margin="normal" name="age" value={this.state.age} onChange={this.onChange}/>

                        <TextField type="number" placeholder="salary" fullWidth margin="normal" name="salary" value={this.state.salary} onChange={this.onChange}/>

                        <Button variant="contained" color="primary" onClick={this.saveHospital}>Save</Button>

                </form>
            </div>
        );
    }
}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default EditHospital;