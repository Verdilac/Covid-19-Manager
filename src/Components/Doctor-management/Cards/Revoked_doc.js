import React, { useState, useEffect } from 'react';
import firebase from '../Tables/firebase';
import { Card, Typography } from '@material-ui/core';

import {FcCancel} from 'react-icons/fc'

export default function Revoked_doc() {

    const [doctordata , setDoctordata] = useState([]);

    useEffect(() => {
        const firestore = firebase.database().ref("/DoctorInfo");
        firestore.on("value", (response) => {
            const data = response.val();
            let doctorInfo = [];
            for (let id in data) {
                doctorInfo.push({
                    id: id,
                    FirstName: data[id].FirstName,
                    LastName: data[id].LastName,
                    Email: data[id].Email,
                    PhoneNumber: data[id].PhoneNumber,
                    Status: data[id].Status,
                    PatientCount: data[id].PatientCount,
                    Specialization: data[id].Specialization,
                    UserName: data[id].UserName,
                    Password: data[id].Password
                });
            }
            setDoctordata(doctorInfo);
        })
    });

    const revoked = doctordata.filter(item => item.Status === 'REVOKED');

    return (

        <div>
                <div className="revoked_card">
                <div className="card_icon">
                    <FcCancel size="3em"/>
                </div>
                <div className="card_inner">
                    <Typography className="title" variant="h5">Revoked Doctors</Typography>
                    <Typography className="number" variant="h4">{revoked.length}</Typography>
                </div>
            </div>
        </div>
    )
}