import React, { useEffect } from "react";
import * as echarts from "echarts";

export default function CardWithChart({ title, data }) {
  useEffect(() => {
    const chartDom = document.getElementById(title);
    const myChart = echarts.init(chartDom);
    const option = {
      title: {
     
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        show: false 
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

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      myChart.dispose();
    };
  }, [data, title]);

  return (
    <div className="card shadow-sm" style={{ height: "20rem" }}>
      <div className="card-body">
        <h5 className="card-title text-dark">{title}</h5>
        <div id={title} style={{ width: '100%', height: '100%' }}></div>
      </div>
    </div>
  );
}
