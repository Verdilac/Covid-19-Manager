import React, { useState, useEffect } from "react";
import firebase from "../../TravelFunction/Firebase";


export default function VaccineData() {


    // Obtaining Vaccine Data START ------------------------------

    const [vaccineData, setVaccineData] = useState([]);

    useEffect(() => {
        const firestore = firebase.database().ref("/VaccineInfo");
        firestore.on("value", (response) => {
            const data = response.val();
            let vaccineInfo = [];
            for (let id in data) {
                vaccineInfo.push({
                    id: id,
                    VaccineName: data[id].VaccineName,
                    CountryName: data[id].CountryName,
                    VaccineType: data[id].VaccineType,
                    ReceivedStocks: data[id].ReceivedStocks,
                    UsedStocks: data[id].UsedStocks,
                });
            }
            setVaccineData(vaccineInfo);
        });
    }, []);

    // Obtaining Vaccine Data END ------------------------------ 



    // Remaining Vaccine Stock Count = Received Stock - Used Stock
    // Received Stock 
    const ReceivedStock = vaccineData.reduce((previous, current) =>  previous + parseInt(current.ReceivedStocks), 0 );

    // Used Stock
    const UsedStock = vaccineData.reduce((previous, current) =>  previous + parseInt(current.UsedStocks), 0 );

    const RemainingVaccineCount = ReceivedStock - UsedStock;

    return (
        <div>
            <p>Total Number of Vaccines : {vaccineData.length}</p>
            <p>------------------------------------------------</p>
            {vaccineData.map((data,index) => {
                return (
                    <p key={index}>{data.VaccineName}</p>
                )
            })}
            <p>------------------------------------------------</p>
            <p>Remaining Vaccine Stock Count : {RemainingVaccineCount}</p>
            {/* <p>Received : {ReceivedStock}</p>
            <p>Used : {UsedStock}</p> */}
        </div>
    );
}
