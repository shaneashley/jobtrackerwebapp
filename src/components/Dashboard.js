// components/Dashboard.js
import React from 'react';
import styled from 'styled-components';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardContainer = styled.div`
  padding: 20px;
  color: ${(props) => props.theme.text};
`;

const ChartContainer = styled.div`
  width: 400px;
  margin: 20px auto;
`;

const Dashboard = ({ jobs }) => {
  const statusCounts = jobs.reduce((acc, job) => {
    acc[job.status] = (acc[job.status] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        label: 'Job Status',
        data: Object.values(statusCounts),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  };

  return (
    <DashboardContainer>
      <h2>Dashboard</h2>
      <ChartContainer>
        <Pie data={chartData} />
      </ChartContainer>
    </DashboardContainer>
  );
};

export default Dashboard;