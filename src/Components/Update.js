import { useState } from 'react';
import './AssignDoc.css';
import firebase from '../firebase';
import './DocTable';

const Update = () => {

    const [uFirstName, setuFirstName] = useState('');
    const [uLastName, setuLastName] = useState('');
    const [uEmail, setuEmail] = useState('');
    const [uAddress, setuAddress] = useState('');
    const [uPhone, setuPhone] = useState('');
    const [uGender, setuGender] = useState('');
    const [uSpecialization, setuSpecialization] = useState('');
    const [uPatientCount, setuPatientCount] = useState('');
    const [uUserName, setuUserName] = useState('');
    const [uPAssword, setuPassword] = useState('');

    const handleUpdateUser = () => {

    };

    return<div className="con">
    <div className="insert_box">
        <div className="title">
            <h2>Update Info</h2>
        </div>
        
            <div class="user_details">
                <div class="input-box">
                <span class="details">First Name</span><br/>
                <input type ="text"  placeholder="Enter first your name" required value={uFirstName} onChange={(e) => {setuFirstName(e.target.value)}}/>
                </div>
                <div class="input-box">
                <span class="details">Last Name</span><br/>
                <input type="text"  placeholder="Enter last you phone number" required  value={uLastName} onChange={(e) => {setuLastName(e.target.value)}}/>
                </div>
                <div class="input-box">
                <span class="details">Email</span><br/>
                <input type ="text"  placeholder="Enter your email" required value={uEmail} onChange={(e) => {setuEmail(e.target.value)}} />
                </div>
                <div class="input-box">
                <span class="details">Address</span><br/>
                <input type="text"  placeholder="Enter you Address" required value={uAddress} onChange={(e) => {setuAddress(e.target.value)}}/>
                </div>
                <div class="input-box">
                <span class="details">Phone</span><br/>
                <input type="text"  placeholder="Enter you phone number" required value={uPhone} onChange={(e) => {setuPhone(e.target.value)}}/>
                </div>
                <div class="radio-box">
                    <span class="details">Gender</span>
                    <input type="radio"   value={uGender} onChange={(e) => {setuGender(e.target.value)}}/>Male
                    <input type="radio"   value={uGender} onChange={(e) => {setuGender(e.target.value)}}/>Female
                </div>
                <div class="input-box2">
                <span class="details">Specialization</span><br/>
                <input type="text"  placeholder="Enter Specialization" required value={uSpecialization} onChange={(e) => {setuSpecialization(e.target.value)}}/>
                </div>
                <div class="input-box2">
                <span class="details">Patient Count</span><br/>
                <input type="text"  placeholder="Enter the patient count" required value={uPatientCount} onChange={(e) => {setuPatientCount(e.target.value)}}/>
                </div>
                <div class="input-box2">
                    <span class="details">User Name</span><br/>
                    <input type="text"  placeholder="Enter your username" required value={uUserName} onChange={(e) => {setuUserName(e.target.value)}}/>
                </div>
                <div class="input-box2">
                    <span class="details">Password</span><br/>
                    <input type="password"  placeholder="Enter your password" required value={uPAssword} onChange={(e) => {setuPassword(e.target.value)}}/>
                </div>		
            
            <button class="button" onClick={() => {handleUpdateUser()}}><span>Update</span></button>
        
        </div>
        
    </div>

</div>
}

export default Update;