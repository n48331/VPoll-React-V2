import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Polling status',
    },
  },
};

const labels = ['Status'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Polled',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Not Polled',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function Stats(props) {
    const labels = ['Status'];
    const data = {
        labels,
        datasets: [
          {
            label: 'Polled',
            data:[props.polled],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Not Polled',
            data: [props.allCount - props.polled],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
  return <Bar options={options}
   data={data} 

   />;
}
