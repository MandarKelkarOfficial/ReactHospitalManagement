import React, { useEffect } from 'react';
import * as echarts from 'echarts';

export default function Chart({ data }) {
  useEffect(() => {
    const chartDom = document.getElementById('pieChart');
    const myChart = echarts.init(chartDom);
    const option = {
      title: {
        text: '',
      
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        show: false // Hide the legend
      },
      series: [{
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    };

    myChart.setOption(option);

    const handleResize = () => {
      myChart.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      myChart.dispose();
    };
  }, [data]);

  return (
    <div id="pieChart" style={{ width: '100%', height: '100%' }}></div>
  );
}
