import React, { useState, useEffect } from "react";
import firebase from "../../../Firebase";


export default function I_Functions() {

  // Obtaining Product Count START -------------------------------------------

  const [productData, setProductData] = useState([]);
 
  useEffect(() => {
    const firestore = firebase.database().ref("/ProductInfo");
    firestore.on("value", (response) => {
      const data = response.val();
      let productInfo = [];
      for (let id in data) {
        productInfo.push({
          id: id,
          Product_Name: data[id].Product_Name,
          Product_Desc: data[id].Product_Desc,
          Product_Status: data[id].Product_Status,
          Product_Expire: data[id].Product_Expire,
          Product_Qty: data[id].Product_Qty
        });
      }
      setProductData(productInfo);
    });
  }, []);


  // Obtaining Product Count END ----------------------------------------------
  
  // 2
  // Reduce is used to count the total in an array
  // O is the value of the accumulator. (Initial Previous Value)
  // https://dev.to/yogesnsamy/how-to-use-the-reduce-method-in-javascript-and-react-5dhl
  // https://stackoverflow.com/questions/54121602/displaying-the-sum-of-values-in-react-jsx/54121633


  // 3
  // https://stackoverflow.com/questions/44672209/react-count-object-properties-in-an-array
  const ordered = productData.filter(item => item.Product_Status === 'ORDERED');


  // 4
  // Low Stock is if product quantity < 10
  const low = productData.filter(entry => Number(entry.Product_Qty) < 10)


  return (
      <div>
          <p>Total : {productData.length}</p>
          <p>Total Quantity : {productData.reduce((previous, current) =>  previous + parseInt(current.Product_Qty), 0 )}</p>
          <p>Total Ordered : {ordered.length}</p>
          <p>Low Stock : {low.length}</p>
      </div>
  );
}
