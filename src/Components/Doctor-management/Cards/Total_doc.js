import React, { useState, useEffect } from 'react';
import firebase from '../../TravelFunction/Firebase';
import { Card, Typography } from '@material-ui/core';

import {MdOutlineHealthAndSafety} from 'react-icons/md'

export default function Total_doc() {

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

    return (
        <div>
            <div className="total_card">
                <div className="card_icon">
                    <MdOutlineHealthAndSafety size="3em"/>
                </div>
                <div className="card_inner">
                    <Typography className="title" variant="h5">Total Doctors</Typography>
                    <Typography className="number" variant="h4">{doctordata.length}</Typography>
                </div>
            </div>
        </div>
    )
}


