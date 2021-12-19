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
import {Card,Button} from 'react-bootstrap';
import { useNavigate } from 'react-router';


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



export default function Stats(props) {
  const navigate = useNavigate()

    const labels = ['Status'];
    const data = {
        labels,
        datasets: [
          {
            label: 'Polled',
            data:[props.polled],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          {
            label: 'Not Polled',
            data: [props.allCount - props.polled],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };
  return (<div>
  <Bar options={options}
   data={data} 
   />

<Card>
  <Card.Header>Remaining to be Polled</Card.Header>
  <Card.Body>
    <Card.Title>{props.allCount - props.polled}</Card.Title>
    <Button 
    onClick={()=>{navigate('/notpolled')}} variant="primary">
    View</Button>
  </Card.Body>
</Card>



   </div>
   )
   
}
