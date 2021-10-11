import React , {useState, useEffect } from 'react';
import firebase from '../Tables/firebase';
import {Bar, Line, Pie} from 'react-chartjs-2';
import './Chart.css'

const Chart = () => {

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

    return <div>
        <div className="chart_container">
        <Bar 
            data= {{       
                labels: ['Praveen', 'nalin', 'Sunil', 'Sandya', 'pathirana' , 'nithya'],
                datasets: [
                    {
                        label: 'Number of patients',
                        data: [10, 19, 6, 17, 20, 14],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    },
                ],
            }}
            height={400}
            width={300}
            options= {{
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        }
                    }]
                }
            }}
            />
    </div>
    </div>
}


export default Chart; 
