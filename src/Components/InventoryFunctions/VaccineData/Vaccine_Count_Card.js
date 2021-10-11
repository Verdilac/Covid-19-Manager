import React, { useState, useEffect } from "react";
import firebase from "../../TravelFunction/Firebase";
import { Icon } from '@iconify/react';
import shoppingFilled from '@iconify/icons-ant-design/shopping-filled';
import { alpha, styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';

import '../Cards/Cards.css'


// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    padding: theme.spacing(5, 0),
    color: '#FFFFFF',
    backgroundColor: '#1a237e'
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


export default function VaccineCount() {

    // Obtaining Vaccine Data START ------------------------------

    const [vaccineData, setVaccineData] = useState([]);

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

    // Obtaining Vaccine Data END ------------------------------ 

    // Remaining Vaccine Stock Count = Received Stock - Used Stock
    // Received Stock 
    const ReceivedStock = vaccineData.reduce((previous, current) => previous + parseInt(current.ReceivedStocks), 0);

    // Used Stock
    const UsedStock = vaccineData.reduce((previous, current) => previous + parseInt(current.UsedStocks), 0);

    const RemainingVaccineCount = ReceivedStock - UsedStock;


    return (
        <RootStyle className="borderRadius">
            <IconWrapperStyle>
                <Icon icon={shoppingFilled} width={24} height={24} />
            </IconWrapperStyle>
            <Typography className="number" variant="h3">{RemainingVaccineCount}</Typography>
            <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
                Remaining Vaccine Stock
            </Typography>
        </RootStyle>
    );
}
