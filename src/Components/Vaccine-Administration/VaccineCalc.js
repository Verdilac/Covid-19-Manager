import { useEffect, useState } from "react";
import firebase from "./firebase";
import "./Note.css";


//================================================================

function VaccineCalc() {
  //store vaccineInfo after getting them from firebase
  const [vaccineData, setVaccineData] = useState([]);

  //get data from firebase
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

  //==================================================================

  //store DistributionInfo after getting them from firebase
  const [distributionData, setDistributionData] = useState([]);

  useEffect(() => {
    const firestore = firebase.database().ref("/DistributionInfo");
    firestore.on("value", (response) => {
      const data = response.val();
      let distributionInfo = [];
      for (let id in data) {
        distributionInfo.push({
          id: id,
          DistrictName: data[id].DistrictName,
          PopulationCount: data[id].PopulationCount,
          ReceivedCount: data[id].ReceivedCount,
          VaccinatedCount: data[id].VaccinatedCount,
        });
      }
      setDistributionData(distributionInfo);
    });
  }, []);

  return (
    
    <div style={{ paddingLeft: 200}}>
      <div class="noteC">
        <h1>Overview Of Vaccination</h1>

        {/* population of sri lanka */}
        <p>
          Population Of Sri Lanka :{" "}
          {distributionData.reduce(
            (previous, current) => previous + parseInt(current.PopulationCount),
            0
          )}
        </p>

        {/* Total no of stocks received */}
        <p>
          Total Vaccine Doses Received :{" "}
          {vaccineData.reduce(
            (previous, current) => previous + parseInt(current.ReceivedStocks),
            0
          )}
        </p>

        {/* Total No of stocks used */}
        <p>
          Total Vaccine Doses Administered :{" "}
          {vaccineData.reduce(
            (previous, current) => previous + parseInt(current.UsedStocks),
            0
          )}
        </p>

        {/* Stocks that are still left */}
        <p>
          Vaccine Doses Still Left :{" "}
          {vaccineData.reduce(
            (previous, current) => previous + parseInt(current.ReceivedStocks),
            0
          ) -
            vaccineData.reduce(
              (previous, current) => previous + parseInt(current.UsedStocks),
              0
            )}
        </p>
      </div>
    </div>
   
  );
}

export default VaccineCalc;
