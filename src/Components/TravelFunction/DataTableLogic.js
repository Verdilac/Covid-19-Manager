import React from "react";
import DataTable from "./DataTable";
import { useState, useEffect } from "react";
import firebase from "firebase";

export default function DataTableLogic() {
  /*------------------------------------*/

  //FORM Values

  const [ufirstName, setufirstName] = useState("");
  const [ulastName, setulastName] = useState("");
  const [upassportNumber, setupassportNumber] = useState("");
  const [uemailAddress, setuemailAddress] = useState("");
  const [uage, setuage] = useState("");
  const [uaddress, setuaddress] = useState("");
  const [uphoneNumber, setuphoneNumber] = useState("");
  const [uQicd, setuQicd] = useState("");
  const [uid, setuid] = useState("");
  //Foreigners
  const [udepatureDate, setudepatureDate] = useState("");
  const [uvisaDuration, setuvisaDuration] = useState("");
  const [uareaToBeTraveled, setuareaToBeTraveled] = useState("");
  //local
  const [uprovince, setuprovince] = useState("");
  const [uworkAddress, setuworkAddress] = useState("");

  /*------------------------------------*/

  //STATE VALUES REGARDING  HANDLE FUNCTIONS

  //setting key for foreigner and native tabs
  const [key, setKey] = useState("Native");

  const [value, setValue] = React.useState("Foreigner");
  const [open, setOpen] = React.useState(false);

  //Data ARRAYS
  const [nativeData, setnativeData] = useState([]);
  const [foreignerData, setforeignerData] = useState([]);

  //   HANDLE FUNCTIONS
  const handleDelete = (id) => {
    if (key === "Native") {
      const firestore = firebase.database().ref("/Native").child(id);
      firestore.remove();
    } else {
      const firestore = firebase.database().ref("/Foreigner").child(id);
      firestore.remove();
    }
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //CRUD FUNCTIONS
  //CRUD OPERATIONS
  const handleUpdate = () => {
    if (key === "Native") {
      const firestore = firebase.database().ref("/Native").child(uid);
      firestore.update({
        //took this off id:uid cuze didnt neeed to change the id
        Passport_no: upassportNumber,
        Fname: ufirstName,
        Lname: ulastName,
        Age: uage,
        Address: uaddress,
        Work_place_address: uworkAddress,
        Email_address: uemailAddress,
        Phone_no: uphoneNumber,
        Province: uprovince,
        Qcid: uQicd,
      });
    } else {
      const firestore = firebase.database().ref("/Foreigner").child(uid);
      firestore.update({
        id: uid,
        Passport_no: upassportNumber,
        Fname: ufirstName,
        Lname: ulastName,
        Age: uage,
        Address: uaddress,
        Email_address: uemailAddress,
        Phone_no: uphoneNumber,
        Depature_date: udepatureDate,
        Vissa_duration: uvisaDuration,
        Area_to_be_travled: uareaToBeTraveled,
        Qcid: uQicd,
      });
    }
  };

  const handleUpdateClick = (data) => {
    if (key === "Native") {
      setuid(data.id);
      setupassportNumber(data.Passport_no);
      setufirstName(data.Fname);
      setulastName(data.Lname);
      setuemailAddress(data.Email_address);
      setuage(data.Age);
      setuaddress(data.Address);
      setuworkAddress(data.Work_Address);
      setuphoneNumber(data.Phone_no);
      setuprovince(data.Province);
      setuQicd(data.Qcid);
    } else {
      setuid(data.id);
      setupassportNumber(data.Passport_no);
      setufirstName(data.Fname);
      setulastName(data.Lname);
      setuemailAddress(data.Email_address);
      setuage(data.Age);
      setuaddress(data.Address);
      setuphoneNumber(data.Phone_no);
      setudepatureDate(data.Depature_date);
      setuvisaDuration(data.Vissa_duration);
      setuareaToBeTraveled(data.Area_to_be_travled);
      setuQicd(data.Qcid);
    }
  };

  return (
    <div>
      <DataTable
        ufirstName={ufirstName}
        setufirstName={setufirstName}
        ulastName={ulastName}
        setulastName={setulastName}
        upassportNumber={upassportNumber}
        setupassportNumber={setupassportNumber}
        uemailAddress={uemailAddress}
        setuemailAddress={setuemailAddress}
        uage={uage}
        setuage={setuage}
        uaddress={uaddress}
        setuaddress={setuaddress}
        uphoneNumber={uphoneNumber}
        setuphoneNumber={setuphoneNumber}
        uQicd={uQicd}
        setuQicd={setuQicd}
        uid={uid}
        setuid={setuid}
        udepatureDate={udepatureDate}
        setudepatureDate={setudepatureDate}
        uvisaDuration={uvisaDuration}
        setuvisaDuration={setuvisaDuration}
        uareaToBeTraveled={uareaToBeTraveled}
        setuareaToBeTraveled={setuareaToBeTraveled}
        uprovince={uprovince}
        setuprovince={setuprovince}
        uworkAddress={uworkAddress}
        setuworkAddress={setuworkAddress}
        key={key}
        setKey={setKey}
        // handleDelete={handleDelete}
        nativeData={nativeData}
        setnativeData={setnativeData}
        foreignerData={foreignerData}
        setforeignerData={setforeignerData}
        value={value}
        setValue={setValue}
        handleChange={handleChange}
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        handleUpdate={handleUpdate}
        handleUpdateClick={handleUpdateClick}
      ></DataTable>
    </div>
  );
}
