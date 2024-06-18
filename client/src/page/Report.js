import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Report = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  const dataJson = [
    { label: 'January', tax: 30, income: 2000, savings: 300, interest: 50 },
    { label: 'February', tax: 45, income: 2200, savings: 320, interest: 55 },
    { label: 'March', tax: 40, income: 2100, savings: 310, interest: 60 },
    { label: 'April', tax: 50, income: 2300, savings: 340, interest: 70 },
    { label: 'May', tax: 35, income: 2400, savings: 360, interest: 80 },
    { label: 'June', tax: 38, income: 2500, savings: 370, interest: 85 },
    { label: 'July', tax: 33, income: 2600, savings: 380, interest: 90 }
  ];

  useEffect(() => {
    const labels = dataJson.map(item => item.label);
    const taxData = dataJson.map(item => item.tax);
    const incomeData = dataJson.map(item => item.income);
    const savingsData = dataJson.map(item => item.savings);
    const interestData = dataJson.map(item => item.interest);

    setChartData({
      labels: labels,
      datasets: [
        {
          label: 'Tax',
          data: taxData,
          backgroundColor: 'rgba(255,99,132,0.4)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
        },
        {
          label: 'Income',
          data: incomeData,
          backgroundColor: 'rgba(54,162,235,0.4)',
          borderColor: 'rgba(54,162,235,1)',
          borderWidth: 1,
        },
        {
          label: 'Savings',
          data: savingsData,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
        },
        {
          label: 'Interest',
          data: interestData,
          backgroundColor: 'rgba(153,102,255,0.4)',
          borderColor: 'rgba(153,102,255,1)',
          borderWidth: 1,
        }
      ],
    });
  }, [dataJson]);

  return (
    <div style={{height:"800px"}}>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Financial Overview',
            },
          },
        }}
      />
    </div>
  );
};

export default Report;
