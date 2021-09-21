import React from "react";
import { Bar } from "react-chartjs-2";
import { Container } from "semantic-ui-react";

const BarChart = () => {
  return (
   
    <div style={{width:1200}}>
     
      
      <Container>
      <Bar style={{paddingLeft:100, maxHeight: 500}}
        data={{
          labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
          datasets: [
            {
              label: "Vaccination 2021",
              data: [4000, 4500, 5500, 3000, 4000, 2000 ,3000, 3500],

              backgroundColor: [
                "#ccd9ff",
                "#b3c6ff",
                "#99b3ff",
                "#809fff",
                "#668cff",
                "#4d79ff",
                "#3366ff",
                "#1a53ff",
              ],

              borderColor: [
                "#ccd9ff",
                "#b3c6ff",
                "#99b3ff",
                "#809fff",
                "#668cff",
                "#4d79ff",
                "#3366ff",
                "#1a53ff",
              ],

              borderWidth: 1,
            },

            

          ],
        }}
        height={400}
        width={100}
        options={{
          maintainAspectRatio: false,
          scales:{
            yAxes: [{
                ticks:{
                    beginAtZero: true,
                }
            }]
          }




        }}
      />
      </Container>
      <h1 style={{color:"#999966",fontSize:20, marginTop:"50px", marginBottom:20, marginLeft:400}}> Improvements Of Vaccination 2021 in Sri Lanka</h1>
      <br></br>
    </div>
  );
};

export default BarChart;
