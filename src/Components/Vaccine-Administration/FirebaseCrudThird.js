import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  Grid,
  Header,
  Icon,
  Input,
  Label,
  Segment,
  Table,
} from "semantic-ui-react";
import firebase from "../TravelFunction/Firebase";

const FirebaseCrudThird = () => {
  //store data entered by the user
  //province name
  const [aProvinceName, setAProvinceName] = useState("");
  //Twenty Dose 1 count
  const [atwentyDone, setAtwentyDone] = useState("");
  //Twenty Dose 2 count
  const [atwentyDtwo, setAtwentyDtwo] = useState("");
  //fifty Dose 1 count
  const [afiftyDone, setAfiftyDone] = useState("");
  //fifty Dose 2 count
  const [afiftyDtwo, setAfiftyDtwo] = useState("");
  // store info after getting them from DB
  const [ageData, setAgeData] = useState([]);

  //update
  //province name
  const [uProvinceName, setuProvinceName] = useState("");
  //Twenty Dose 1 count
  const [utwentyDone, setutwentyDone] = useState("");
  //Twenty Dose 2 count
  const [utwentyDtwo, setutwentyDtwo] = useState("");
  //fifty Dose 1 count
  const [ufiftyDone, setufiftyDone] = useState("");
  //fifty Dose 2 count
  const [ufiftyDtwo, setufiftyDtwo] = useState("");

  // to store the id
  const [ageId, setAgeId] = useState("");

  // validation - Add
  const [ProvinceNameErr, setProvinceNameErr] = useState({});
  
  const [twentyDoneErr, settwentyDoneErr] = useState({});
  
  const [twentyDtwoErr, settwentyDtwoErr] = useState({});
  
  const [fiftyDoneErr, setfiftyDoneErr] = useState({});
  
  const [fiftyDtwoErr, setfiftyDtwoErr] = useState({});


    // validation - Update
    const [uProvinceNameErr, usetProvinceNameErr] = useState({});
  
    const [utwentyDoneErr, usettwentyDoneErr] = useState({});
    
    const [utwentyDtwoErr, usettwentyDtwoErr] = useState({});
    
    const [ufiftyDoneErr, usetfiftyDoneErr] = useState({});
    
    const [ufiftyDtwoErr, usetfiftyDtwoErr] = useState({});






  //get data from firebase
  useEffect(() => {
    const firestore = firebase.database().ref("/VaccinationInfo");
    firestore.on("value", (response) => {
      const data = response.val();
      let VaccinationInfo = [];
      for (let id in data) {
        VaccinationInfo.push({
          id: id,
          ProvinceName: data[id].ProvinceName,
          twentyDone: data[id].twentyDone,
          twentyDtwo: data[id].twentyDtwo,
          fiftyDone: data[id].fiftyDone,
          fiftyDtwo: data[id].fiftyDtwo,
        });
      }
      setAgeData(VaccinationInfo);
    });
  }, []);

  // push data to the database


  // send data to update table
  const handleUpdateAge = () => {
    const firestore = firebase.database().ref("/VaccinationInfo").child(ageId);
    firestore.update({
      ProvinceName: uProvinceName,
      twentyDone: utwentyDone,
      twentyDtwo: utwentyDtwo,
      fiftyDone: ufiftyDone,
      fiftyDtwo: ufiftyDtwo,
    })
    setuProvinceName("");
    setutwentyDone("");
    setutwentyDtwo("");
    setufiftyDone("");
    setufiftyDtwo("");
  };



  const handleUpdateClick = (data) => {
    setuProvinceName(data.ProvinceName);
    setutwentyDone(data.twentyDone);
    setutwentyDtwo(data.twentyDtwo);
    setufiftyDone(data.fiftyDone);
    setufiftyDtwo(data.fiftyDtwo);
    setAgeId(data.id);
  }


  const handleDelete = (id) => {
      const firestore = firebase.database().ref("/VaccinationInfo").child(id);
      firestore.remove();

  }


  //---------------------------------------------------------------------------------

  // form validation and push data to the database

  const handleAddAge = () => {
    const isValid = formValidation();
    if(isValid){

      const firestore = firebase.database().ref("/VaccinationInfo");
      let data = {
        ProvinceName: aProvinceName,
        twentyDone: atwentyDone,
        twentyDtwo: atwentyDtwo,
        fiftyDone: afiftyDone,
        fiftyDtwo: afiftyDtwo,
      };

      firestore.push(data);
      setAProvinceName("");
      setAtwentyDone("");
      setAtwentyDtwo("");
      setAfiftyDone("");
      setAfiftyDtwo("");
    }

  }

  const formValidation = () => {
      const ProvinceNameErr = {};
      const twentyDoneErr = {};
      const twentyDtwoErr = {};
      const fiftyDoneErr = {};
      const fiftyDtwoErr = {};
      let isValid = true;

      if(aProvinceName.trim().length < 1){
        ProvinceNameErr.provinceNameShort = "You must Enter the Province !";
        isValid = false;
      }

      if(atwentyDone.trim().length < 1){
        twentyDoneErr.twentyDoneShort = "You must Enter Dose 1 count below 20 !";
        isValid = false;
      }

      if(atwentyDtwo.trim().length < 1){
        twentyDtwoErr.twentyDtwoShort = "You must Enter Dose 2 count below 20 !";
        isValid = false;
      }

      if(afiftyDone.trim().length < 1){
        fiftyDoneErr.fiftyDoneShort = "You must Enter Dose 1 count below 50 !";
        isValid = false;
      }

      if(afiftyDtwo.trim().length < 1){
        fiftyDtwoErr.fiftyDtwoShort = "You must Enter Dose 2 count below 50 !";
        isValid = false;
      }

      setProvinceNameErr(ProvinceNameErr);
      settwentyDoneErr(twentyDoneErr);
      settwentyDtwoErr(twentyDtwoErr);
      setfiftyDoneErr(fiftyDoneErr);
      setfiftyDtwoErr(fiftyDtwoErr);

      return isValid;



  }



  //---------------------------------------------------------------------------------

    //---------------------------------------------------------------------------------

  // form validation for Update table

  const handleUpdateAgeVal = () => {
    const isValid = formValidationSec();
    if(isValid){

      handleUpdateAge();
    }

  }

  const formValidationSec = () => {
      const uProvinceNameErr = {};
      const utwentyDoneErr = {};
      const utwentyDtwoErr = {};
      const ufiftyDoneErr = {};
      const ufiftyDtwoErr = {};
      let isValid = true;

      if(uProvinceName.trim().length < 1){
        uProvinceNameErr.uprovinceNameShort = "You must Enter the Province !";
        isValid = false;
      }

      if(utwentyDone.trim().length < 1){
        utwentyDoneErr.utwentyDoneShort = "You must Enter Dose 1 count below 20 !";
        isValid = false;
      }

      if(utwentyDtwo.trim().length < 1){
        utwentyDtwoErr.utwentyDtwoShort = "You must Enter Dose 2 count below 20 !";
        isValid = false;
      }

      if(ufiftyDone.trim().length < 1){
        ufiftyDoneErr.ufiftyDoneShort = "You must Enter Dose 1 count below 50 !";
        isValid = false;
      }

      if(ufiftyDtwo.trim().length < 1){
        ufiftyDtwoErr.ufiftyDtwoShort = "You must Enter Dose 2 count below 50 !";
        isValid = false;
      }

      usetProvinceNameErr(uProvinceNameErr);
      usettwentyDoneErr(utwentyDoneErr);
      usettwentyDtwoErr(utwentyDtwoErr);
      usetfiftyDoneErr(ufiftyDoneErr);
      usetfiftyDtwoErr(ufiftyDtwoErr);

      return isValid;



  }



  //---------------------------------------------------------------------------------

  //  Form
  return (
    <div class="ui hidden divider">
      <Container>

      <Label style={{fontSize:20, marginTop:"100px", marginBottom:"10px", padding:"10px", color:"#967117" }}>Vaccination Under Different Age Groups</Label>

        <Grid>
          <Grid.Row columns="2">
            <Grid.Column>

              <Segment padded="very"  style={{background:"#F5F5F5"}}>

                <Form>
                  <Form.Field>
                    <label>Province </label>
                    <Input
                      placeholder="Province"
                      focus
                      value={aProvinceName}
                      onChange={(e) => {
                        setAProvinceName(e.target.value);
                      }}
                    />

                    {Object.keys(ProvinceNameErr).map((key)=>{
                      return <div style={{color:"red",fontSize:12}}>{ProvinceNameErr[key]}</div>
                    })}

                  </Form.Field>

                  <Form.Field>
                    <label>Count of Dose 1 Above 20</label>
                    <Input
                    type='number'
                      placeholder="Count of Dose 1 Above 20"
                      focus
                      value={atwentyDone}
                      onChange={(e) => {
                        setAtwentyDone(e.target.value);
                      }}
                    />

                    {Object.keys(twentyDoneErr).map((key)=>{
                      return <div style={{color:"red",fontSize:12}}>{twentyDoneErr[key]}</div>
                    })}

                  </Form.Field>

                  <Form.Field>
                    <label>Count of Dose 2 Above 20</label>
                    <Input
                    type='number'
                      placeholder="Count of Dose 2 Above 20"
                      focus
                      value={atwentyDtwo}
                      onChange={(e) => {
                        setAtwentyDtwo(e.target.value);
                      }}
                    />

                    {Object.keys(twentyDtwoErr).map((key)=>{
                      return <div style={{color:"red",fontSize:12}}>{twentyDtwoErr[key]}</div>
                    })}

                  </Form.Field>

                  <Form.Field>
                    <label>Count of Dose 1 Above 50</label>
                    <Input
                    type='number'
                      placeholder="Count of Dose 1 Above 50"
                      focus
                      value={afiftyDone}
                      onChange={(e) => {
                        setAfiftyDone(e.target.value);
                      }}
                    />

                    {Object.keys(fiftyDoneErr).map((key)=>{
                      return <div style={{color:"red",fontSize:12}}>{fiftyDoneErr[key]}</div>
                    })}

                  </Form.Field>

                  <Form.Field>
                    <label>Count of Dose 2 Above 50</label>
                    <Input
                    type='number'
                      placeholder="Count of Dose 2 Above 50"
                      focus
                      value={afiftyDtwo}
                      onChange={(e) => {
                        setAfiftyDtwo(e.target.value);
                      }}
                    />

                      {Object.keys(fiftyDtwoErr).map((key)=>{
                      return <div style={{color:"red",fontSize:12}}>{fiftyDtwoErr[key]}</div>
                    })}

                  </Form.Field>

                  <Form.Field>
                    <Button
                      onClick={() => {
                        handleAddAge();
                      }}
                      positive
                    >
                      <Icon name="add circle"></Icon>
                      Add Data{" "}
                    </Button>
                  </Form.Field>
                </Form>
              </Segment>
            </Grid.Column>






            <Grid.Column>
              <Segment padded="very"  style={{background:"#F5F5F5"}}>
                <Form>
                  <Form.Field>
                    <label>Province</label>
                    <Input
                      placeholder="Province"
                      focus
                      value={uProvinceName}
                      onChange={(e) => {
                        setuProvinceName(e.target.value);
                      }}
                    />
                     {Object.keys(uProvinceNameErr).map((key)=>{
                      return <div style={{color:"red",fontSize:12}}>{uProvinceNameErr[key]}</div>
                    })}
                  </Form.Field>

                  <Form.Field>
                    <label>Count of Dose 1 Above 20</label>
                    <Input
                    type='number'
                      placeholder="Count of Dose 1 Above 20"
                      focus
                      value={utwentyDone}
                      onChange={(e) => {
                        setutwentyDone(e.target.value);
                      }}
                    />
                     {Object.keys(utwentyDoneErr).map((key)=>{
                      return <div style={{color:"red",fontSize:12}}>{utwentyDoneErr[key]}</div>
                    })}
                  </Form.Field>

                  <Form.Field>
                    <label>Count of Dose 2 Above 20</label>
                    <Input
                    type='number'
                      placeholder="Count of Dose 2 Above 20"
                      focus
                      value={utwentyDtwo}
                      onChange={(e) => {
                        setutwentyDtwo(e.target.value);
                      }}
                    />
                      {Object.keys(utwentyDtwoErr).map((key)=>{
                      return <div style={{color:"red",fontSize:12}}>{utwentyDtwoErr[key]}</div>
                    })}
                  </Form.Field>

                  <Form.Field>
                    <label>Count of Dose 1 Above 50</label>
                    <Input
                    type='number'
                      placeholder="Count of Dose 1 Above 50"
                      focus
                      value={ufiftyDone}
                      onChange={(e) => {
                        setufiftyDone(e.target.value);
                      }}
                    />
                     {Object.keys(ufiftyDoneErr).map((key)=>{
                      return <div style={{color:"red",fontSize:12}}>{ufiftyDoneErr[key]}</div>
                    })}
                  </Form.Field>

                  <Form.Field>
                    <label>Count of Dose 2 Above 50</label>
                    <Input
                    type='number'
                      placeholder="Count of Dose 2 Above 50"
                      focus
                      value={ufiftyDtwo}
                      onChange={(e) => {
                        setufiftyDtwo(e.target.value);
                      }}
                    />
                     {Object.keys(ufiftyDtwoErr).map((key)=>{
                      return <div style={{color:"red",fontSize:12}}>{ufiftyDtwoErr[key]}</div>
                    })}
                  </Form.Field>

                  <Form.Field>
                    <Button
                      onClick={() => {
                        handleUpdateAgeVal();
                      }}
                      primary
                    >
                      <Icon name="edit"></Icon>
                      Update Data
                    </Button>
                  </Form.Field>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns="1">
            <Grid.Column>
              {ageData.length == 0 ? (
                <Segment padded="very">
                  <Header textAlign="center">No Data Available !</Header>
                </Segment>
              ) : (
                <Segment padded="very"  style={{background:"#B2BEB5"}}>
                  <Table celled fixed singleLine>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>ProvinceName</Table.HeaderCell>
                        <Table.HeaderCell>D1 Above 20</Table.HeaderCell>
                        <Table.HeaderCell>D2 Above 20</Table.HeaderCell>
                        <Table.HeaderCell>D1 Above 50</Table.HeaderCell>
                        <Table.HeaderCell>D2 Above 50</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    {ageData.map((data, index) => {
                      return (
                        <Table.Body>
                          <Table.Cell>{data.ProvinceName}</Table.Cell>
                          <Table.Cell>{data.twentyDone}</Table.Cell>
                          <Table.Cell>{data.twentyDtwo}</Table.Cell>
                          <Table.Cell>{data.fiftyDone}</Table.Cell>
                          <Table.Cell>{data.fiftyDtwo}</Table.Cell>
                          <Table.Cell>
                            <Button primary onClick={()=>{handleUpdateClick(data)}}>
                              <Icon name="edit"></Icon>
                            </Button>
                            <Button color="red" onClick={()=>{handleDelete(data.id)}}>
                              <Icon name="delete"></Icon>
                            </Button>
                          </Table.Cell>
                        </Table.Body>
                      );
                    })}
                  </Table>
                </Segment>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default FirebaseCrudThird;
