import React, { Component } from 'react';

import firebase from '../../Firebase';


class IDGenerator extends React.Component {
    constructor(props) {
      super(props);
      this.ref = firebase.firestore().collection('centers').orderBy('qcid').limitToLast(1);
      this.unsubscribe = null;
      this.state = {
        centers: []
      };
     
    }
  
    onCollectionUpdate = (querySnapshot) => {
      const centers = [];
      querySnapshot.forEach((doc) => {
        const { qcid, centername, district, qi, capacity } = doc.data();
        centers.push({
          key: doc.id,
          doc, // DocumentSnapshot
          qcid,
          centername,
          district,
          qi,
          capacity,
        });
      });
      this.setState({
        centers
     });
  
    }

    componentDidMount() {
      this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }
  
              render(){
                          var QCID=(this.state.centers.reduce((qcid,currentItem) =>  qcid = qcid+= (currentItem.qcid) , '' ));
                          
                          if(QCID == ''){

                            QCID = "QC0000";

                        }
                          var ID = parseInt(QCID.substr(2, 6)) 

                          var nextIdCount = parseInt(ID + 1);
                          
                          var nextIdPrefix = "QC";
                          
                          var nextIdsuffix = ("0000" + nextIdCount).slice(-4);

                          const finalID = nextIdPrefix + nextIdsuffix;

                                      return(
                                              <div>
                                                     {finalID} 
                                              </div>   
                                      );
                  }    
   }                
           
export default IDGenerator;