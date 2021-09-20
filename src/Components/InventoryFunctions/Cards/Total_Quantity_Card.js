import React, { useState, useEffect } from "react";
import firebase from "../../../Firebase";
import { Icon } from '@iconify/react';
import shoppingCart from '@iconify/icons-entypo/shopping-cart';
import { alpha, styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';

import './Cards.css'


// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: '#FFFFFF',
  backgroundColor: '#5c6bc0'
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: '#FFFFFF',
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0)} 0%, ${alpha(
    theme.palette.primary.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------


export default function TotalQuantity() {

  // Obtaining Firebase Data START -------------------------------------------

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


  // Obtaining Firebase Data  END ----------------------------------------------



  return (
    <RootStyle className="borderRadius">
      <IconWrapperStyle>
        <Icon icon={shoppingCart} width={24} height={24} />
      </IconWrapperStyle>
      <Typography className="number" variant="h3">{productData.reduce((previous, current) =>  previous + parseInt(current.Product_Qty), 0 )}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Total Quantity
      </Typography>
    </RootStyle>
  );
}
