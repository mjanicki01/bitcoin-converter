import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };
  
  const labels = ['|', '|', '|', '|', '|', '|', '|', '|', '|', '|'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 2',
        data: [33, 53, 85, 41, 44, 65, 23, 12, 45, 40],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
  const Graph = () => {
    return <Line options={options} data={data} />;
  }
  
  export default Graph