import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class AddHospital extends Component{

    constructor(props){
        super(props);
        this.state ={
            hospitalname: '',
            password: '',
            firstName: '',
            lastName: '',
            age: '',
            salary: '',
            message: null
        }
        this.saveHospital = this.saveHospital.bind(this);
    }

    saveHospital = (e) => {
        e.preventDefault();
        let hospital = {hospitalname: this.state.hospitalname, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, salary: this.state.salary};
        ApiService.addHospital(hospital)
            .then(res => {
                this.setState({message : 'Hospital added successfully.'});
                this.props.history.push('/hospitals');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <Typography variant="h4" style={style}>Add Hospital</Typography>
                <form style={formContainer}>

                    <TextField type="text" placeholder="hospitalname" fullWidth margin="normal" name="hospitalname" value={this.state.hospitalname} onChange={this.onChange}/>

                    <TextField type="password" placeholder="password" fullWidth margin="normal" name="password" value={this.state.password} onChange={this.onChange}/>

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
const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style ={
    display: 'flex',
    justifyContent: 'center'

}

export default AddHospital;