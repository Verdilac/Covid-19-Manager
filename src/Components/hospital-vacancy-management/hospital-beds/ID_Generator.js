import React, { Component } from 'react';
import '../../../App.css';
import firebase from '../../TravelFunction/Firebase';
//import Create from './Create'

class ID_Generator extends React.Component {
    constructor(props) {
      super(props);
      this.ref = firebase.firestore().collection('hospital_beds').orderBy('HBID').limitToLast(1);
      this.unsubscribe = null;
      this.state = {
        hospital_beds: []
      };
     
    }
  
    onCollectionUpdate = (querySnapshot) => {
      const hospital_beds = [];
      querySnapshot.forEach((doc) => {
        const { HBID, HID, patientID, patientName } = doc.data();
        hospital_beds.push({
          key: doc.id,
          doc, // DocumentSnapshot
          HBID, 
          HID, 
          patientID, 
          patientName
        });
      });
      this.setState({
        hospital_beds
     });
  
    }

    componentDidMount() {
      this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }
  
              render(){
                          var HBID=(this.state.hospital_beds.reduce((HBID,currentItem) =>  HBID = HBID+= (currentItem.HBID) , '' ));
                          
                          if(HBID == ''){

                            HBID = "HB0000";

                        }


                          var ID = parseInt(HBID.substr(2, 6)) 

                          var nextIdCount = parseInt(ID + 1);
                          
                          var nextIdPrefix = "HB";
                          
                          var nextIdsuffix = ("0000" + nextIdCount).slice(-4);

                          const finalID = nextIdPrefix + nextIdsuffix;

                                      return(
                                              <div>
                                                     {finalID} 
                                              </div>   
                                      );
                  }    
   }                
           
export default ID_Generator;