import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, CartesianGrid } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(date, amount) {
  return { date, amount };
}

const data = [
  createData('16-08-2021', 3625),
  createData('17-08-2021', 3732),
  createData('18-08-2021', 3902),
  createData('19-08-2021', 4509),
  createData('20-08-2021', 4685),
  createData('21-08-2021', 4821),
  createData('22-08-2021', 4988),
  /*createData('23-08-2021', 2400),
  createData('24-08-2021', undefined),*/
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Hospital Bed & ICU Availability</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="date" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Use
            </Label>
          </YAxis>
          <CartesianGrid stroke="#ddd" />
          <Line type="monotone" dataKey="amount" stroke={theme.palette.secondary.main} dot={true} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}