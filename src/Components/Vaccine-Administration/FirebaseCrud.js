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
  import { useEffect, useState } from "react";
  import FirebaseCrudSec from "./FirebaseCrudSec";
  
  const FirebaseCrud = () => {
    //store the data entered by the user
    //Vaccine Name
    const [aVaccineName, setAVaccineName] = useState("");
    //Country Name
    const [aCountryName, setACountryName] = useState("");
    //Vaccine Type
    const [aVaccineType, setAVaccineType] = useState("");
    //Received Stocks
    const [aReceivedStocks, setAReceivedStocks] = useState("");
    //Used Stocks
    const [aUsedStocks, setAUsedStocks] = useState("");
  
    //store vaccineInfo after getting them from firebase
    const [vaccineData, setVaccineData] = useState([]);
  
    //store data (for update)
    const [uVaccineName, setuVaccineName] = useState("");
  
    const [uCountryName, setuCountryName] = useState("");
  
    const [uVaccineType, setuVaccineType] = useState("");
  
    const [uReceivedStocks, setuReceivedStocks] = useState("");
  
    const [uUsedStocks, setuUsedStocks] = useState("");
  
    //id
    const [productId, setProductId] = useState("");
  
    //validation for add vaccine details table
    const [vaccineNameErr , setVaccineNameErr] = useState({});
  
    const [countryNameErr , setCountryNameErr] = useState({});
  
    const [vaccineTypeErr , setVaccineTypeErr] = useState({});
  
    const [receivedStocksErr , setReceivedStocksErr] = useState({});
  
    const [usedStocksErr , setUsedStocksErr] = useState({});
  
  
  
      //validation for add vaccine updated vaccine details table
      const [uvaccineNameErr , usetVaccineNameErr] = useState({});
  
      const [ucountryNameErr , usetCountryNameErr] = useState({});
    
      const [uvaccineTypeErr , usetVaccineTypeErr] = useState({});
    
      const [ureceivedStocksErr , usetReceivedStocksErr] = useState({});
    
      const [uusedStocksErr , usetUsedStocksErr] = useState({});
  
  
  
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
  
    //send data to firebase once user clicked on button
   
  
    //sent data to the update table
    const handleUpdateProduct = () => {
      const firestore = firebase.database().ref("/VaccineInfo").child(productId);
      firestore.update({
        VaccineName: uVaccineName,
        CountryName: uCountryName,
        VaccineType: uVaccineType,
        ReceivedStocks: uReceivedStocks,
        UsedStocks: uUsedStocks,
      });
      // after user click update vaccine details button - refresh the form
      setuVaccineName("");
      setuCountryName("");
      setuVaccineType("");
      setuReceivedStocks("");
      setuUsedStocks("");
    };
  
    const handleUpdateClick = (data) => {
      setuVaccineName(data.VaccineName);
      setuCountryName(data.CountryName);
      setuVaccineType(data.VaccineType);
      setuReceivedStocks(data.ReceivedStocks);
      setuUsedStocks(data.UsedStocks);
      setProductId(data.id);
    };
  
    //handle delete function
    const handleDelete = (id) => {
      const firestore = firebase.database().ref("/VaccineInfo").child(id);
      firestore.remove();
    };
  
  
  
  // ADD USER + form validation
  
  const handleAddProduct = ()=>{
    
    const isValid = formValidation();
    if(isValid){
      
      const firestore = firebase.database().ref("/VaccineInfo");
      let data = {
        VaccineName: aVaccineName,
        CountryName: aCountryName,
        VaccineType: aVaccineType,
        ReceivedStocks: aReceivedStocks,
        UsedStocks: aUsedStocks,
      };
  
      //push data into firestore
      firestore.push(data);
      setAVaccineName("");
      setACountryName("");
      setAVaccineType("");
      setAReceivedStocks("");
      setAUsedStocks("");
  
    }
  }
  
  
  const formValidation = () =>{
    const vaccineNameErr = {};
    const countryNameErr = {};
    const vaccineTypeErr = {};
    const receivedStocksErr = {};
    const usedStocksErr = {};
    let isValid = true;
  
  
    if(aVaccineName.trim().length < 1){
      vaccineNameErr.vaccineNameShort = "You must Enter the vaccine name !";
      isValid = false;
    }
  
  
    if(aCountryName.trim().length < 1){
     countryNameErr.countryNameShort = "You must Enter the country name !";
      isValid = false;
    }
  
  
    if(aVaccineType.trim().length < 1){
      vaccineTypeErr.vaccineTypeShort = "You must Enter the vaccine type !";
      isValid = false;
    }
  
  
    if(aReceivedStocks.trim().length < 1){
      receivedStocksErr.receivedStocksShort = "You must Enter the received # of received stocks !";
      isValid = false;
    }
    
  
    //---------------------------
  
    if (Number(aReceivedStocks.trim()) == 0 || Number(aReceivedStocks.trim()) < 0) {
      receivedStocksErr.receivedStockCountMinus = "Received Stock count must be a positive value";
      isValid = false;
  }
  //-----------------------------
  
  
  
  
    if(aUsedStocks.trim().length < 1){
      usedStocksErr.usedStocksShort = "You must Enter the # of stocks used !";
      isValid = false;
    }
  
  
    if ( Number(aUsedStocks.trim()) < 0) {
      usedStocksErr.usedStockCountMinus = "Used Stock count must be a positive value";
      isValid = false;
  }
  
  
    setVaccineNameErr(vaccineNameErr);
    setCountryNameErr(countryNameErr);
    setVaccineTypeErr(vaccineTypeErr);
    setReceivedStocksErr(receivedStocksErr);
    setUsedStocksErr(usedStocksErr);
    return isValid;
  }
  
  
  //----------------------------------------------------------------
  
  //validation for vaccina Details update form
  const handleUpdateValidation = ()=>{
    const isValid = formValidationSec();
    if(isValid){
      handleUpdateProduct();
    }
  }
  
  
  
  
  
  const formValidationSec = () =>{
    const uvaccineNameErr = {};
    const ucountryNameErr = {};
    const uvaccineTypeErr = {};
    const ureceivedStocksErr = {};
    const uusedStocksErr = {};
    let isValid = true;
  
  
    if(uVaccineName.trim().length < 1){
      uvaccineNameErr.uvaccineNameShort = "You must Enter the vaccine name !";
      isValid = false;
    }
  
  
    if(uCountryName.trim().length < 1){
     ucountryNameErr.ucountryNameShort = "You must Enter the country name !";
      isValid = false;
    }
  
  
    if(uVaccineType.trim().length < 1){
      uvaccineTypeErr.uvaccineTypeShort = "You must Enter the vaccine type !";
      isValid = false;
    }
  
  
    if(uReceivedStocks.trim().length < 1){
      ureceivedStocksErr.ureceivedStocksShort = "You must Enter the received # of received stocks !";
      isValid = false;
    }
  
  
  
    if(uUsedStocks.trim().length < 1){
      uusedStocksErr.uusedStocksShort = "You must Enter the # of stocks used !";
      isValid = false;
    }
  
  
    usetVaccineNameErr(uvaccineNameErr);
    usetCountryNameErr(ucountryNameErr);
    usetVaccineTypeErr(uvaccineTypeErr);
    usetReceivedStocksErr(ureceivedStocksErr);
    usetUsedStocksErr(uusedStocksErr);
    return isValid;
  }
  
  
  
  
  
  //----------------------------------------------------------------
  
  
  
  
  
    //form
    return (
      <div class="ui hidden divider">
        <Container>
        <Label style={{fontSize:20, marginTop:"100px", marginBottom:"15px", padding:"10px" }}>Vaccine Details</Label>
  
          <Grid  style={{background:"#f5f5f0"}}>
            <Grid.Row columns="2">
              <Grid.Column>
                <Segment padded="very"   style={{background:"#e6eeff"}}>
                  <Form>
  
  
  
                    <Form.Field>
                      <label>Vaccine Name</label>
                      <Input
                        placeholder="vaccine name..."
                        focus
                        value={aVaccineName}
                        onChange={(e) => {
                          setAVaccineName(e.target.value);
                        }}
                      />
                      {Object.keys(vaccineNameErr).map((key)=>{
                        return <div style={{color:"red",fontSize:12}}>{vaccineNameErr[key]}</div>
                      })}
                    </Form.Field>
  
  
                    <Form.Field>
                      <label>Country</label>
                      <Input
                        placeholder="Country..."
                        focus
                        value={aCountryName}
                        onChange={(e) => {
                          setACountryName(e.target.value);
                        }}
                      />
                      {Object.keys(countryNameErr).map((key)=>{
                        return <div style={{color:"red",fontSize:12}}>{countryNameErr[key]}</div>
                      })}
                    </Form.Field>
  
  
                    <Form.Field>
                      <label>Vaccine Type</label>
                      <Input
                        placeholder="vaccine Type..."
                        focus
                        value={aVaccineType}
                        onChange={(e) => {
                          setAVaccineType(e.target.value);
                        }}
                      />
                      {Object.keys(vaccineTypeErr).map((key)=>{
                        return <div style={{color:"red",fontSize:12}}>{vaccineTypeErr[key]}</div>
                      })}
                    </Form.Field>
  
  
  
                    <Form.Field>
                      <label>No Of Stocks Received</label>
                      <Input
                        type='number'
                        placeholder="Received Stock Count..."
                        focus
                        value={aReceivedStocks}
                        onChange={(e) => {
                          setAReceivedStocks(e.target.value);
                        }}
                      />
                      {Object.keys(receivedStocksErr).map((key)=>{
                        return <div style={{color:"red",fontSize:12}}>{receivedStocksErr[key]}</div>
                      })}
                    </Form.Field>
  
  
  
                    <Form.Field>
                      <label>No Of Stocks Used</label>
                      <Input
                      type='number'
                        placeholder="Used Stock Count..."
                        focus
                        value={aUsedStocks}
                        onChange={(e) => {
                          setAUsedStocks(e.target.value);
                        }}
                      />
                      {Object.keys(usedStocksErr).map((key)=>{
                        return <div style={{color:"red",fontSize:12}}>{usedStocksErr[key]}</div>
                      })}
                    </Form.Field>
  
  
  
                    <Form.Field>
                      <Button
                        onClick={() => {
                          handleAddProduct();
                        }}
                        positive
                      >
                        <Icon name="add circle"></Icon>
                        Add Vaccine Details
                      </Button>
                    </Form.Field>
                  </Form>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                {" "}
                <Segment padded="very"  style={{background:"#e6eeff"}}>
                  <Form>
                    <Form.Field>
                      <label>Vaccine Name</label>
                      <Input
                        placeholder="vaccine name..."
                        focus
                        value={uVaccineName}
                        onChange={(e) => {
                          setuVaccineName(e.target.value);
                        }}
                      />
                      {Object.keys(uvaccineNameErr).map((key)=>{
                        return <div style={{color:"red",fontSize:12}}>{uvaccineNameErr[key]}</div>
                      })}
                    </Form.Field>
  
                    <Form.Field>
                      <label>Country</label>
                      <Input
                        placeholder="Country..."
                        focus
                        value={uCountryName}
                        onChange={(e) => {
                          setuCountryName(e.target.value);
                        }}
                      />
                      {Object.keys(ucountryNameErr).map((key)=>{
                        return <div style={{color:"red",fontSize:12}}>{ucountryNameErr[key]}</div>
                      })}
                    </Form.Field>
  
                    <Form.Field>
                      <label>Vaccine Type</label>
                      <Input
                        placeholder="vaccine Type..."
                        focus
                        value={uVaccineType}
                        onChange={(e) => {
                          setuVaccineType(e.target.value);
                        }}
                      />
                       {Object.keys(uvaccineTypeErr).map((key)=>{
                        return <div style={{color:"red",fontSize:12}}>{uvaccineTypeErr[key]}</div>
                      })}
                    </Form.Field>
  
                    <Form.Field>
                      <label>No Of Stocks Received</label>
                      <Input
                      type='number'
                        placeholder="Received Stock Count..."
                        focus
                        value={uReceivedStocks}
                        onChange={(e) => {
                          setuReceivedStocks(e.target.value);
                        }}
                      />
                      {Object.keys(ureceivedStocksErr).map((key)=>{
                        return <div style={{color:"red",fontSize:12}}>{ureceivedStocksErr[key]}</div>
                      })}
                    </Form.Field>
  
                    <Form.Field>
                      <label>No Of Stocks Used</label>
                      <Input
                      type='number'
                        placeholder="Used Stock Count..."
                        focus
                        value={uUsedStocks}
                        onChange={(e) => {
                          setuUsedStocks(e.target.value);
                        }}
                      />
                      {Object.keys(uusedStocksErr).map((key)=>{
                        return <div style={{color:"red",fontSize:12}}>{uusedStocksErr[key]}</div>
                      })}
                    </Form.Field>
  
                    <Form.Field>
                      <Button
                        onClick={() => {
                          handleUpdateValidation();
                        }}
                        primary
                      >
                        <Icon name="edit"></Icon>
                        Update Vaccine Details
                      </Button>
                    </Form.Field>
                  </Form>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns="1">
              <Grid.Column>
                {vaccineData.length == 0 ? (
                  <Segment padded="very" >
                    <Header textAlign="center">No Data Available !</Header>
                  </Segment>
                ) : (
                  <Segment padded="very" style={{background:"#e6eeff"}}>
                    <Table celled fixed singleLine>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Vaccine </Table.HeaderCell>
                          <Table.HeaderCell>Country</Table.HeaderCell>
                          <Table.HeaderCell> Type</Table.HeaderCell>
                          <Table.HeaderCell>Received Stocks</Table.HeaderCell>
                          <Table.HeaderCell>Used Stocks</Table.HeaderCell>
                          <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      {vaccineData.map((data, index) => {
                        return (
                          <Table.Body>
                            <Table.Cell>{data.VaccineName}</Table.Cell>
                            <Table.Cell>{data.CountryName}</Table.Cell>
                            <Table.Cell>{data.VaccineType}</Table.Cell>
                            <Table.Cell>{data.ReceivedStocks}</Table.Cell>
                            <Table.Cell>{data.UsedStocks}</Table.Cell>
                            <Table.Cell>
                              <Button
                                primary
                                onClick={() => {
                                  handleUpdateClick(data);
                                }}
                              >
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
  
  {/*--------------------------------------------------------------------*/}
  
          
          <Grid.Row columns="1">
          <Grid.Column>
              
              
                 {
                   <FirebaseCrudSec/>
                 }
  
              
              </Grid.Column>
            </Grid.Row>
            
  
  
  {/*--------------------------------------------------------------------*/}
  
  
        </Container>
      </div>
    );
  };
  
  export default FirebaseCrud;
  