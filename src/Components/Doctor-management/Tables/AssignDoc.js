import { useState } from "react";
import "./AssignDoc.css";
import firebase from "../../TravelFunction/Firebase";
import { useHistory } from "react-router";

const AssignDoc = () => {
  let history = useHistory();

  const [aFirstName, setaFirstName] = useState("");
  const [aLastName, setaLastName] = useState("");
  const [aEmail, setaEmail] = useState("");
  const [aStatus, setaStatus] = useState("");
  const [aPhone, setaPhone] = useState("");
  const [aGender, setaGender] = useState("");
  const [aSpecialization, setaSpecialization] = useState("");
  const [aPatientCount, setaPatientCount] = useState("");
  const [aUserName, setaUserName] = useState("");
  const [aPassword, setaPassword] = useState("");

  const handleAddUser = () => {
    const firestore = firebase.database().ref("/DoctorInfo");
    let data = {
      FirstName: aFirstName,
      LastName: aLastName,
      Email: aEmail,
      Status: aStatus,
      PhoneNumber: aPhone,
      Gender: aGender,
      Specialization: aSpecialization,
      PatientCount: aPatientCount,
      UserName: aUserName,
      Password: aPassword,
    };
    firestore.push(data);
  };

  return (
    <div>
      <div className="wrapper">
        <div className="title">
          <h2>Register Doctors</h2>
        </div>
        <form>
          <input
            className="input__control"
            type="text"
            placeholder="First Name"
            value={aFirstName}
            onChange={(e) => {
              setaFirstName(e.target.value);
            }}
            required
          />
          <div className="underline"></div>

          <input
            className="input__control"
            required
            type="text"
            placeholder="Last Name"
            value={aLastName}
            onChange={(e) => {
              setaLastName(e.target.value);
            }}
          />

          <input
            className="input__control"
            required
            type="email"
            placeholder="Email"
            value={aEmail}
            onChange={(e) => {
              setaEmail(e.target.value);
            }}
          />
          <br />

          {/* <input className="input__control" type="text" value={aStatus} onChange={(e) => {setaStatus(e.target.value)}}/>
                    <label className="details">Status</label> */}

          <div className="select_txt">
            <label className="select_det">Status</label>
          </div>
          <select
            value={aStatus}
            onChange={(e) => {
              setaStatus(e.target.value);
            }}
          >
            <option>Status</option>
            <option value="ASSIGNED">ASSIGNED</option>
            <option value="NOT ASSIGNED">NOT ASSIGNED</option>
            <option value="REVOKED">REVOKED</option>
          </select>

          <input
            className="input__control"
            type="text"
            placeholder="Phone Number"
            value={aPhone}
            onChange={(e) => {
              setaPhone(e.target.value);
            }}
            required
          />

          <input
            className="input__control"
            required
            type="text"
            placeholder="Specialization"
            value={aSpecialization}
            onChange={(e) => {
              setaSpecialization(e.target.value);
            }}
          />

          <input
            className="input__control"
            required
            type="text"
            placeholder="Patient Count"
            value={aPatientCount}
            onChange={(e) => {
              setaPatientCount(e.target.value);
            }}
          />

          <input
            className="input__control"
            required
            type="text"
            placeholder="UserName"
            value={aUserName}
            onChange={(e) => {
              setaUserName(e.target.value);
            }}
          />

          <input
            className="input__control"
            required
            type="text"
            placeholder="PassWord"
            value={aPassword}
            onChange={(e) => {
              setaPassword(e.target.value);
            }}
          />

          <button
            className="btn_sub"
            onClick={() => {
              history.push("/doctor");
              handleAddUser();
            }}
          >
            <span>Register Doctor</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AssignDoc;
