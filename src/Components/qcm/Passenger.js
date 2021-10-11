import React from "react";
import { useState, useEffect } from "react";
import firebase from "../TravelFunction/Firebase";

export default function Passenger({ pass }) {
  const [pasdata, setpasdata] = useState([]);

  useEffect(() => {
    const firestore = firebase.database().ref("/Native");
    firestore.on("value", (response) => {
      const Pdata = response.val();
      const nativeinfo = [];
      for (let id in Pdata) {
        nativeinfo.push({
          id: id,
          Passport_no: Pdata[id].Passport_no,
          Fname: Pdata[id].Fname,
          Lname: Pdata[id].Lname,
          Email_address: Pdata[id].Email_address,
          Age: Pdata[id].Age,
          Address: Pdata[id].Address,
          Work_Address: Pdata[id].Work_place_address,
          Phone_no: Pdata[id].Phone_no,
          Province: Pdata[id].Province,
          Qcid: Pdata[id].Qcid,
        });
      }
      setpasdata(nativeinfo);
    });
  }, []);

  return (
    <div>
      {pasdata.map((item, index) => {
        if (pass == item.Qcid)
          return (
            <div>
              <h1>{item.Qcid}</h1>
              <h1>{item.Fname}</h1>
            </div>
          );
      })}
    </div>
  );
}
