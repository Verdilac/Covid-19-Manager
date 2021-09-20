import { useState } from 'react';
import './AssignDoc.css';
import firebase from '../firebase';
import { useHistory } from 'react-router';


const AssignDoc = () => {

    let history = useHistory();

    const [aFirstName, setaFirstName] = useState('');
    const [aLastName, setaLastName] = useState('');
    const [aEmail, setaEmail] = useState('');
    const [aAddress, setaAddress] = useState('');
    const [aPhone, setaPhone] = useState('');
    const [aGender, setaGender] = useState('');
    const [aSpecialization, setaSpecialization] = useState('');
    const [aPatientCount, setaPatientCount] = useState('');
    const [aUserName, setaUserName] = useState('');
    const [aPassword, setaPassword] = useState('');
   

    const handleAddUser = () => {
        const firestore = firebase.database().ref('/DoctorInfo');
        let data = {
            FirstName:aFirstName,
            LastName:aLastName,
            Email:aEmail,
            Address:aAddress,
            PhoneNumber:aPhone,
            Gender:aGender,
            Specialization:aSpecialization,
            PatientCount:aPatientCount,
            UserName:aUserName,
            Password:aPassword,
        }
        firestore.push(data);
    }
    
    return <div className="wrapper">
    
            <div className="title">
                <h2>Register Doctors</h2>
            </div>
            <form>
                    
                    <input className="input__control" type ="text" value={aFirstName} onChange={(e) => {setaFirstName(e.target.value)}}/>
                    <div className="underline"></div>
                    <label className="details">First Name</label>
    
                    <input className="input__control" type="text" value={aLastName} onChange={(e) => {setaLastName(e.target.value)}}/>
                    <label className="details">Last Name</label>
                    
                    
                    <input className="input__control" type ="email" value={aEmail} onChange={(e) => {setaEmail(e.target.value)}} />
                    <label className="details">Email</label>
                    
                    
                    <input className="input__control" type="text" value={aAddress} onChange={(e) => {setaAddress(e.target.value)}}/>
                    <label className="details">Address</label>
              
                    
                    <input className="input__control" type="text"  value={aPhone} onChange={(e) => {setaPhone(e.target.value)}}/>
                    <label className="details">Phone</label>

                    {/* <div className="form-check">
                    <label className="gen">Gender</label>
                    <input className="form-check-input" type="radio" value={aGender} onChange={(e) => {setaGender(e.target.value)}} />
                    <label class="form-check-label" for="flexRadioDefault1">
                        Male
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" value={aGender} onChange={(e) => {setaGender(e.target.value)}} />
                    <label className="form-check-label" for="flexRadioDefault1">
                        Female
                    </label>
                    </div> */}
                   
                    
                    <input className="input__control" type="text" value={aSpecialization} onChange={(e) => {setaSpecialization(e.target.value)}}/>
                    <label className="details">Specialization</label>
                   
                    <input className="input__control" type="text"  value={aPatientCount} onChange={(e) => {setaPatientCount(e.target.value)}}/>
                    <label className="details">Patient Count</label>
                    
                    <input className="input__control" type="text" value={aUserName} onChange={(e) => {setaUserName(e.target.value)}}/>
                    <label className="details">User Name</label>
                   
                    <input className="input__control" type="text"  value={aPassword} onChange={(e) => {setaPassword(e.target.value)}}/>
                    <label className="details">Password</label>
                  
                <button className="btn_sub" onClick={() => {history.push('/'); handleAddUser()}}><span>Register Doctor</span></button>
            
        </form>
            

    </div>
}

export default AssignDoc;