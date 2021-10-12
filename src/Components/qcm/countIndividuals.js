import React from "react";
import { useState, useEffect } from "react";
import firebase from "../TravelFunction/Firebase";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
//import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from "@material-ui/icons/Delete";
//import { TableContainer } from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import Title from "./Dashboard/Title";
import Container from "@material-ui/core/Container";

export default function Passenger({ pass }) {
  const [pasdata, setpasdata] = useState([]);
  const [fpData, setfpData] = useState([]);

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

  useEffect(() => {
    const firestore = firebase.database().ref("/Foreigner");
    firestore.on("value", (response) => {
        const Fdata = response.val();
        const foreigninfo = [];
        for (let id in Fdata) {
          foreigninfo.push({
            id: id,
            Passport_no: Fdata[id].Passport_no,
            Fname: Fdata[id].Fname,
            Lname: Fdata[id].Lname,
            Email_address: Fdata[id].Email_address,
            Age: Fdata[id].Age,
            Address: Fdata[id].Address,
            Phone_no: Fdata[id].Phone_no,
            Depature_date: Fdata[id].Depature_date,
            Vissa_duration: Fdata[id].Vissa_duration,
            Area_to_be_travled: Fdata[id].Area_to_be_travled,
            Qcid: Fdata[id].Qcid,
          });
        }
        setfpData(foreigninfo);
    });
  }, []);

  return (
   
    <>



     
    </>

  );
}

