import React, { useState, useEffect } from 'react';
import firebase from '../../TravelFunction/Firebase';
import { Card, Typography } from '@material-ui/core';

import {MdAssignment} from 'react-icons/md'

export default function Total_patients() {

    const [patientData,setPatientData] = useState([]);

    useEffect(()=>{
        const firestore = firebase.database().ref("/PatientInfo");
        firestore.on("value",(response) => {
            const data = response.val();
            let patientInfo = [];
            for (let id in data){
                patientInfo.push({
                    id:id,
                    PatientNIC: data[id].PatientNIC,
                    PatientFirstName: data[id].PatientFirstName,
                    PatientLastName: data[id].PatientLastName,
                    PatientDOB: data[id].PatientDOB,
                    PatientAddress: data[id].PatientAddress,
                    GuardianNIC: data[id].GuardianNIC,
                    GuardianName: data[id].GuardianName,
                    GuardianAddress: data[id].GuardianAddress,
                    GuardianPhone:data[id].GuardianPhone,
                });
            }
            setPatientData(patientInfo);
        })
    },[])


    return (

        <div>
            <div className="assign_card">
                <div className="card_icon">
                    <MdAssignment size="3em"/>
                </div>
                <div className="card_inner">
                    <Typography className="title" variant="h5">Total Patients</Typography>
                    <Typography className="number" variant="h4">{patientData.length}</Typography>
                </div>
            </div>
        </div>
    )
}





