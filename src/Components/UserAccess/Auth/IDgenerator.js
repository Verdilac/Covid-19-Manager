import React, { Component } from 'react';

import firebase from '../firebase';

class IDGenerator extends React.Component {
    constructor(props) {
      super(props);
      this.ref = firebase.firestore().collection('users').orderBy('count').limitToLast(1);
      this.unsubscribe = null;
      this.state = {
        users: []
      };
     
    }
  
    onCollectionUpdate = (querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        const {nic, userID, userName, email, jobTitle, address, phoneNumber, dob, qcs, hs, doct, admin, healthOfficial, count} = doc.data();
        users.push({
          key: doc.id,
          doc, // DocumentSnapshot
          nic,
          userID,
          userName,
          email,
          jobTitle,
          address,
          phoneNumber,
          dob,
          //docID,
          //specialization,
          qcs,
          hs,
          doct,
          admin,
          healthOfficial,
          count,
        });
      });
      this.setState({
        users
     });
  
    }

    componentDidMount() {
      this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }
  
              render(){
                          var USID=(this.state.users.reduce((count,currentItem) =>  count = count += (currentItem.count) ,''));

                          if(USID == ''){

                              USID = 0;

                          }

                          var ID = parseInt(USID);
                            
                          var nextIdCount = ID + 1;
                            
                          var finalID = ("0000000" + nextIdCount).slice(-7);

  
                                      return(
                                              <div>
                                                     {finalID} 
                                              </div>   
                                      );
                  }    
   }                
           
export default IDGenerator;