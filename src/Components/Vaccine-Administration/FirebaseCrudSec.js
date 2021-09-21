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
  
  const FirebaseCrudSec = () => {
    //store the data entered by the user
    //District Name
    const [aDistrictName, setADistrictName] = useState("");
    //Population Count
    const [aPopulationCount, setAPopulationCount] = useState("");
    //Received Vaccine Count
    const [aReceivedCount, setAReceivedCount] = useState("");
    //Vaccinated Count
    const [aVaccinatedCount, setAVaccinatedCount] = useState("");
    
  
    //store DistributionInfo after getting them from firebase
    const [distributionData, setDistributionData] = useState([]);
  
    //store data (for update)
    const [uDistrictName, setuDistrictName] = useState("");
  
    const [uPopulationCount, setuPopulationCount] = useState("");
  
    const [uReceivedCount, setuReceivedCount] = useState("");
  
    const [uVaccinatedCount, setuVaccinatedCount] = useState("");
  
  
    //id
    const [distributionId, setDistributionId] = useState("");
  
    //validation
    const [districtNameErr , setDistrictNameErr] = useState({});

    const [populationCountErr , setPopulationCountErr] = useState({});
  
    const [receivedCountErr , setReceivedCountErr] = useState({});
  
    const [vaccinatedCountErr , setVaccinatedCountErr] = useState({});



    //validation - Distribution update table

    const [udistrictNameErr , usetDistrictNameErr] = useState({});

    const [upopulationCountErr , usetPopulationCountErr] = useState({});
  
    const [ureceivedCountErr , usetReceivedCountErr] = useState({});
  
    const [uvaccinatedCountErr , usetVaccinatedCountErr] = useState({});
    
  
  
  
    //get data from firebase
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
  
    //send data to firebase once user clicked on button
    
     
    
  
    //sent data to the update table
    const handleUpdateDistribution = () => {
      const firestore = firebase.database().ref("/DistributionInfo").child(distributionId);
      firestore.update({
        DistrictName: uDistrictName,
        PopulationCount: uPopulationCount,
        ReceivedCount: uReceivedCount,
        VaccinatedCount: uVaccinatedCount, 
      });
      // after user click update vaccine details button - refresh the form
      setuDistrictName("");
      setuPopulationCount("");
      setuReceivedCount("");
      setuVaccinatedCount(""); 
    };
  
    const handleUpdateClick = (data) => {
      setuDistrictName(data.DistrictName);
      setuPopulationCount(data.PopulationCount);
      setuReceivedCount(data.ReceivedCount);
      setuVaccinatedCount(data.VaccinatedCount);
      
      setDistributionId(data.id);
    };
  
    //handle delete function
    const handleDelete = (id) => {
      const firestore = firebase.database().ref("/DistributionInfo").child(id);
      firestore.remove();
    };


    // ADD USER + form validation

    const handleAddDistribution = () => {

      const isValid = formValidation();
      if(isValid){

        const firestore = firebase.database().ref("/DistributionInfo");
        let data = {
          DistrictName: aDistrictName,
          PopulationCount: aPopulationCount,
          ReceivedCount: aReceivedCount,
          VaccinatedCount: aVaccinatedCount,  
        };
    
        //push data into firestore
        firestore.push(data);
        setADistrictName("");
        setAPopulationCount("");
        setAReceivedCount("");
        setAVaccinatedCount(""); 

      }
    }

    const formValidation = () =>{
      const districtNameErr = {};
      const populationCountErr = {};
      const receivedCountErr = {};
      const vaccinatedCountErr = {}; 
      let isValid = true;


      if(aDistrictName.trim().length < 1){
        districtNameErr.districtNameShort = "You must Enter the district name !";
        isValid = false;
      }


      //--------------

      if(aPopulationCount.trim().length < 1){
        populationCountErr.populationCountShort = "You must Enter the population count !";
        isValid = false;
      }

      if ( Number(aPopulationCount.trim()) < 1 ) {
        populationCountErr.PopulationDisCountMinus = " Population count must be a positive value";
        isValid = false;
    }
    

      //---------------

      if(aReceivedCount.trim().length < 1){
        receivedCountErr.receivedCountShort = "You must Enter the received count !";
        isValid = false;
      }

      if ( Number(aReceivedCount.trim()) < 0) {
        receivedCountErr.ReceivedDisStockCountMinus = "Received Stock count must be a positive value";
        isValid = false;
    }



      //----------------

      if(aVaccinatedCount.trim().length < 1){
        vaccinatedCountErr.vaccinatedCountShort = "You must Enter the vaccinated count !";
        isValid = false;
      }

      if ( Number(aVaccinatedCount.trim()) < 0) {
        vaccinatedCountErr.VaccinatedDisCountMinus = "Received Stock count must be a positive value";
        isValid = false;
    }



      setDistrictNameErr(districtNameErr);
      setPopulationCountErr(populationCountErr);
      setReceivedCountErr(receivedCountErr);
      setVaccinatedCountErr(vaccinatedCountErr);
      
      return isValid;
    }
    

    //--------------------------------------------------------------------------------------

    // Distribution Update table validation

    const handleUpDistribuionVal = ()=>{
      const isValid = formValidationSec();
      if(isValid){
        handleUpdateDistribution();
      }
    }
    

    const formValidationSec = () =>{
      const udistrictNameErr = {};
      const upopulationCountErr = {};
      const ureceivedCountErr = {};
      const uvaccinatedCountErr = {}; 
      let isValid = true;


      if(uDistrictName.trim().length < 1){
        udistrictNameErr.udistrictNameShort = "You must Enter the district name !";
        isValid = false;
      }

      if(uPopulationCount.trim().length < 1){
        upopulationCountErr.upopulationCountShort = "You must Enter the population count !";
        isValid = false;
      }

      if(uReceivedCount.trim().length < 1){
        ureceivedCountErr.ureceivedCountShort = "You must Enter the received count !";
        isValid = false;
      }

      if(uVaccinatedCount.trim().length < 1){
        uvaccinatedCountErr.uvaccinatedCountShort = "You must Enter the vaccinated count !";
        isValid = false;
      }

      usetDistrictNameErr(udistrictNameErr);
      usetPopulationCountErr(upopulationCountErr);
      usetReceivedCountErr(ureceivedCountErr);
      usetVaccinatedCountErr(uvaccinatedCountErr);
      
      return isValid;
    }



    //--------------------------------------------------------------------------------------






  
    //form
    return (
        
      <div class="ui hidden divider">
        <Container>
        
        <Label style={{fontSize:20, marginTop:"100px", marginBottom:"10px", padding:"10px" }}>Vaccine Distribution</Label>

          <Grid>
            <Grid.Row columns="2">
           
              <Grid.Column>
                <Segment padded="very"  style={{background:"#e6eeff"}}>
                  <Form>
  
  
  
                    <Form.Field>
                      <label>District Name</label>
                      <Input
                        placeholder="District name..."
                        focus
                        value={aDistrictName}
                        onChange={(e) => {
                          setADistrictName(e.target.value);
                        }}
                      />
                      {Object.keys(districtNameErr).map((key)=>{
                      return <div style={{color:"red",fontSize:12}}>{districtNameErr[key]}</div>
                    })}
                    </Form.Field>
  
  
                    <Form.Field>
                      <label>Population Count</label>
                      <Input
                      type='number'
                        placeholder="Population count..."
                        focus
                        value={aPopulationCount}
                        onChange={(e) => {
                          setAPopulationCount(e.target.value);
                        }}
                      />
                      {Object.keys(populationCountErr).map((key)=>{
                      return <div style={{color:"red",fontSize:12}}>{populationCountErr[key]}</div>
                    })}
                    </Form.Field>
  
  
                    <Form.Field>
                      <label>Received Total Doses</label>
                      <Input
                      type='number'
                        placeholder="Received Total Doses..."
                        focus
                        value={aReceivedCount}
                        onChange={(e) => {
                          setAReceivedCount(e.target.value);
                        }}
                      />
                      {Object.keys(receivedCountErr).map((key)=>{
                      return <div style={{color:"red",fontSize:12}}>{receivedCountErr[key]}</div>
                    })}
                    </Form.Field>
  
  
  
                    <Form.Field>
                      <label>Total Vaccination Count</label>
                      <Input
                      type='number'
                        placeholder="Total Vaccination Count..."
                        focus
                        value={aVaccinatedCount}
                        onChange={(e) => {
                          setAVaccinatedCount(e.target.value);
                        }}
                      />
                       {Object.keys(vaccinatedCountErr).map((key)=>{
                      return <div style={{color:"red",fontSize:12}}>{vaccinatedCountErr[key]}</div>
                    })}
                    </Form.Field>
  
  
  
                   
  
  
  
                    <Form.Field>
                      <Button
                        onClick={() => {
                          handleAddDistribution();
                        }}
                        positive
                      >
                        <Icon name="add circle"></Icon>
                        Add Distribution Details
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
                      <label>District Name</label>
                      <Input
                        placeholder="District name..."
                        focus
                        value={uDistrictName}
                        onChange={(e) => {
                          setuDistrictName(e.target.value);
                        }}
                      />
                      {Object.keys(udistrictNameErr).map((key)=>{
                      return <div style={{color:"red",fontSize:12}}>{udistrictNameErr[key]}</div>
                    })}
                    </Form.Field>
  
                    <Form.Field>
                      <label>Population Count</label>
                      <Input
                      type='number'
                        placeholder="Population Count..."
                        focus
                        value={uPopulationCount}
                        onChange={(e) => {
                          setuPopulationCount(e.target.value);
                        }}
                      />
                       {Object.keys(upopulationCountErr).map((key)=>{
                      return <div style={{color:"red",fontSize:12}}>{upopulationCountErr[key]}</div>
                    })}
                    </Form.Field>
  
                    <Form.Field>
                      <label>Received Total Doses</label>
                      <Input
                      type='number'
                        placeholder="Received Total Doses..."
                        focus
                        value={uReceivedCount}
                        onChange={(e) => {
                          setuReceivedCount(e.target.value);
                        }}
                      />
                       {Object.keys(ureceivedCountErr).map((key)=>{
                      return <div style={{color:"red",fontSize:12}}>{ureceivedCountErr[key]}</div>
                    })}
                    </Form.Field>
  
                    <Form.Field>
                      <label>Total Vaccination Count</label>
                      <Input
                      type='number'
                        placeholder="Total Vaccination Count..."
                        focus
                        value={uVaccinatedCount}
                        onChange={(e) => {
                          setuVaccinatedCount(e.target.value);
                        }}
                      />
                       {Object.keys(uvaccinatedCountErr).map((key)=>{
                      return <div style={{color:"red",fontSize:12}}>{uvaccinatedCountErr[key]}</div>
                    })}
                    </Form.Field>
  
                  
  
                    <Form.Field>
                      <Button
                        onClick={() => {
                          handleUpDistribuionVal();
                        }}
                        primary
                      >
                        <Icon name="edit"></Icon>
                        Update Distribution Details
                      </Button>
                    </Form.Field>
                  </Form>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns="1">
              <Grid.Column>
                {distributionData.length == 0 ? (
                  <Segment padded="very"  style={{background:"#e6eeff"}}>
                    <Header textAlign="center">No Data Available !</Header>
                  </Segment>
                ) : (
                  <Segment padded="very"  style={{background:"#e6eeff"}}>
                    <Table celled fixed singleLine>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>District </Table.HeaderCell>
                          <Table.HeaderCell>Population</Table.HeaderCell>
                          <Table.HeaderCell> Received Total Doses</Table.HeaderCell>
                          <Table.HeaderCell>Total Vaccination Count</Table.HeaderCell>
                          
                          <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      {distributionData.map((data, index) => {
                        return (
                          <Table.Body>
                            <Table.Cell>{data.DistrictName}</Table.Cell>
                            <Table.Cell>{data.PopulationCount}</Table.Cell>
                            <Table.Cell>{data.ReceivedCount}</Table.Cell>
                            <Table.Cell>{data.VaccinatedCount}</Table.Cell>
                           
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
         

        </Container>
      </div>
    );
  };
  
  export default FirebaseCrudSec;
  
  
  // firebase crud .js
  
  
  
  
  
  
  
  
  