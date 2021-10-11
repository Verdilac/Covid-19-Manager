import { useEffect, useState } from "react";
import firebase from "../TravelFunction/Firebase";
import "./Note.css";

function PatientCalc(){


//  PATIENT INFO
//================================================================

    //store patientInfo after getting them from firebase
    const [patientData,setPatientData] = useState([]);

    //get data from firebase

    
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
   

    //==================================================================

    // DOCTOR INFO

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const firestore = firebase.database().ref("/DoctorInfo");
        firestore.on("value", (response) =>{
            const data = response.val();
            let doctorInfo = [];
            for (let id in data ){
                doctorInfo.push({
                    id:id,
                    FirstName: data[id].FirstName,
                    LastName: data[id].LastName,
                    Email: data[id].Email,
                    Status: data[id].Status,
                    PhoneNumber: data[id].PhoneNumber,
                    Specialization: data[id].Specialization,
                    PatientCount: data[id].PatientCount,
                    UserName: data[id].UserName,
                    Password: data[id].Password,
                });
            }
            setUserData(doctorInfo);
        })
    });


    //==================================================================

    return(

        <div style={{ paddingLeft: 200}}>
        <div class="noteP">
          <h1 style={{ color:"red"}}>The world is in the midst of a COVID-19 pandemic.</h1>

            {/* Total Number of Patients */}
           
          <p style={{ color:"white"}}> Currently, There are ,  </p>
          <h2 style={{marginLeft:100, color:"#00FFFF", fontSize:50}}>{patientData.length} Patients </h2>
          <p style={{ color:"white", marginLeft:60}}> in hospital due to Coronavirus (COVID-19) and </p>

          <h2 style={{marginLeft:150, color:"#FDEE00", fontSize:35}}>{userData.length} </h2>

          <h2 style={{marginLeft:100, color:"#FFBF00", fontSize:18}}> Doctors working in Outpatient Departments</h2>
          <p style={{ color:"white", marginLeft:50}}>Vaccines save millions of lives each year.Take whatever vaccine is made available to you first, even if you have already had COVID-19. 
           It is important to be vaccinated as soon as possible once it’s your turn and not wait. You can be part of ending the pandemic for us all.</p>

         

          </div>
          </div>
    )
}

export default PatientCalc;
