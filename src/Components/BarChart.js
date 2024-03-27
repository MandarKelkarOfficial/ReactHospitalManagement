import React, { useRef, useEffect } from "react";
import { Chart as ChartJS } from 'chart.js/auto'; // Assuming you're using Chart.js v3 with auto registration

export default function BarChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy previous instance (if any) for proper cleanup
    const existingChart = ChartJS.getChart(ctx);
    if (existingChart) {
      existingChart.destroy();
    }

    const myChart = new ChartJS(ctx, {
      type: 'bar',
      data: {
        labels: ['Date 1', 'Date 2', 'Date 3', 'Date 4'],
        datasets: [
          {
            label: 'Severity-High',
            data: [6, 4, 2, 1],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          },
          // ... other datasets
        ]
      },
      options: {
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10
          }
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });

    // You can use myChart here for further interactions (optional)
    // ...

  }, []);

  return (
    <div className="container">
      <h2>Patient Details</h2>
      <canvas ref={chartRef} id="myChartCanvas" width="200" height="200" />
    </div>
  );
}
