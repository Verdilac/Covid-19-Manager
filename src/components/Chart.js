import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Syringe',
    July: 4000,
    August: 2400,
    amt: 2400,
  },
  {
    name: 'Sanitizer',
    July: 3000,
    August: 1398,
    amt: 2210,
  },
  {
    name: 'N95 Masks',
    July: 2000,
    August: 9800,
    amt: 2290,
  },
  {
    name: 'FPP2 Mask',
    July: 2780,
    August: 3908,
    amt: 2000,
  },
  {
    name: 'Blood Kit',
    July: 1890,
    August: 4800,
    amt: 2181,
  },
  {
    name: 'Crestor 10ml',
    July: 2390,
    August: 3800,
    amt: 2500,
  },
  {
    name: 'Nexium',
    July: 3490,
    August: 4300,
    amt: 2100,
  },
];

export default function Chart() {

    return (
        <ResponsiveContainer width="40%" aspect={3}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="August" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="July" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      );
}
