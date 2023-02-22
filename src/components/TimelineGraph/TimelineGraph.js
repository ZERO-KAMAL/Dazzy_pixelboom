import React, { useState } from 'react';
import "./TimelineGraph.scss";
import ReactECharts from 'echarts-for-react';

/**
 * @component to show the data in form of timeline graph
 * @return  {Jsx}  It returns jsx for render the user data in form of graph.
 * )
 */

const TimelineGraph = () => {
  const [testData, setTestData] = useState([
    [
      90.5, 160.5, 130.5, 90.5, 60.5, 40.5, 135.5
    ],
    [
      110.5, 60.5, 130.0, 80.5, 10.0, 0.0, 0.0
    ],
    [9.0, 7.0, 11.5, 15.5, 5.0, 12.5, 18.0]
  ])
  const symbolSize = 8;
  const option = {
    title: {
      text: 'Timeline',
      textStyle: {
        color: "#8A8A8A",
        fontSize: "16px",
        fontFamily: 'Proxima Nova'
      },
    },
    grid: {
      left: '5%',
      right: '18%',
      bottom: '15%',
    },
    color: ["#ED5683", "#5A56CA", "#F3994F"],
    legend: {
      data: ['Generated', 'Saved', 'Searches'],
      bottom: '0%',
      icon: 'rect',
      left: '23%'
    },
    xAxis: [
      {
        type: 'category',
        data: ['Dec 10', 'Dec 12', 'Dec 14', 'Dec 16', 'Dec 18', 'Dec 20', 'Dec 220',],
        axisPointer: {
          type: 'shadow',
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: '',
        min: 0,
        max: 250,
        interval: 50,
      },
      {
        type: 'value',
        name: '',
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
          show: false,
          formatter: '{value} °C'
        },
      }
    ],
    series: [
      {
        name: 'Generated',
        type: 'bar',
        stack: 'total',
        data: testData[0],
        barWidth: '20%'
      },
      {
        name: 'Saved',
        type: 'bar',
        stack: 'total',
        data: testData[1]
      },
      {
        name: 'Searches',
        type: 'line',
        symbolSize: symbolSize,
        yAxisIndex: 1,
        data: testData[2]
      }
    ]
  };
  return (
    <div className='timeline-graph-wrapper'>
      <ReactECharts option={option} />
    </div>
  )
}

export default TimelineGraph;
