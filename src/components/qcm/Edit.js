import React, { Component } from 'react';
import firebase from '../../Firebase';
import { Link } from 'react-router-dom';
import NavBar from "./Navbar";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      centername: '',
      district: '',
      qi: '',
      capacity: '',
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('centers').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const center = doc.data();
        this.setState({
          key: doc.id,
          centername: center.centername,
          district: center.district,
          qi: center.qi,
          capacity: center.capacity
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({center:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { centername, district, qi, capacity } = this.state;

    const updateRef = firebase.firestore().collection('centers').doc(this.state.key);
    updateRef.set({
      centername,
      district,
      qi,
      capacity
    }).then((docRef) => {
      this.setState({
        key: '',
        centername: '',
        district: '',
        qi: '',
        capacity: ''
      });
      this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  qclist(){

    this.props.history.push('/');
  }

  render() {
    return (

      <>
            <div>
            <NavBar/>
        </div>


      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <Typography variant="h3" style={style}>
              EDIT CENTER
            </Typography>
          </div>
          <div class="panel-body">

            

          <Button variant="contained" color="primary" onClick={() => this.qclist()}>
                    Quarantine Center Dashboard
          </Button>
            
            <form onSubmit={this.onSubmit}>
            
             
                <TextField type="text" placeholder="Center Name" fullWidth margin="normal" name="centername" value={this.state.centername} onChange={this.onChange}/>
         
            
                
                <TextField type="text" placeholder="District" fullWidth margin="normal" name="district" value={this.state.district} onChange={this.onChange}/>
            
          
       
                <TextField type="number" placeholder="Quarantined Individuals" fullWidth margin="normal" name="qi" value={this.state.qi} onChange={this.onChange}/>
             
             
              
                <TextField type="number" placeholder="Capacity" fullWidth margin="normal" name="capacity" value={this.state.capacity} onChange={this.onChange}/>
            
            
              <Button type="submit" variant="contained" color="primary"  startIcon={<SaveIcon />} onClick={this.savecenter}>Save</Button>
              
            </form>
          </div>
        </div>
      </div>

     </> 
    );
  }
}
const style ={
  color: '#3e54af',
  display: 'flex',
  justifyContent: 'center'
}

export default Edit;