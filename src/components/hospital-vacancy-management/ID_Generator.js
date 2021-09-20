import React, { Component } from 'react';
import '../../App.css';
import firebase from '../../Firebase';
//import Create from './Create'

class ID_Generator extends React.Component {
    constructor(props) {
      super(props);
      this.ref = firebase.firestore().collection('hospitals').orderBy('hospital_ID').limitToLast(1);
      this.unsubscribe = null;
      this.state = {
        hospitals: []
      };
     
    }
  
    onCollectionUpdate = (querySnapshot) => {
      const hospitals = [];
      querySnapshot.forEach((doc) => {
        const { hospital_ID, hospital_name, district, treatment_wards, total_beds, total_icu_beds } = doc.data();
        hospitals.push({
          key: doc.id,
          doc, // DocumentSnapshot
          hospital_ID,
          hospital_name,
          district,
          treatment_wards,
          total_beds,
          total_icu_beds
        });
      });
      this.setState({
        hospitals
     });
  
    }

    componentDidMount() {
      this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }
  
              render(){
                          var HID=(this.state.hospitals.reduce((hospital_ID,currentItem) =>  hospital_ID = hospital_ID+= (currentItem.hospital_ID) , '' ));
                          
                          if(HID == ''){

                            HID = "HP0000";

                        }


                          var ID = parseInt(HID.substr(2, 6)) 

                          var nextIdCount = parseInt(ID + 1);
                          
                          var nextIdPrefix = "HP";
                          
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