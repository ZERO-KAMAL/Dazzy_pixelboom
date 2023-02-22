import React from 'react';
import "./ConversionGraph.scss";
import ReactECharts from 'echarts-for-react';

/**
 * @component to show the data in form of conversion graph
 * @return  {Jsx}  It returns jsx for render the user data in form of graph.
 * )
 */

const ConversionGraph = () => {
  const option = {

    title: {
      text: "Conversion",
      textStyle: {
        color: "#8A8A8A",
        fontSize: "16px",
        fontFamily: 'Proxima Nova'
      },
    },
    color: ["#ED5683", "#5A56CA"],
    tooltip: {
      trigger: 'item'
    },
    legend: {
      bottom: '2%',
      left: 'center',
      itemStyle: {
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          {
            value: 500, name: 'Generated', itemStyle: {
              normal: {
                borderWidth: 1.5,
                borderColor: '#5A56CA'
              }
            }
          },
          {
            value: 700, name: 'Saved', itemStyle: {
              normal: {
                borderWidth: 1.5,
                borderColor: '#ED5683'
              }
            }
          },
        ]
      }
    ],
    graphic: {
      elements: [{
        type: 'text',
        left: 'center',
        top: 'middle',
        z: 999,
        style: {
          text: `41%`,
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 600,
          fill: '#5A56CA',

        },
      }]
    },

  };
  return (
    <div className='conversion-graph-wrapper'>
      <ReactECharts option={option} />
    </div>
  )
}

export default ConversionGraph;
