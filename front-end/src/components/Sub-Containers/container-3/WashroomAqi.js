import React from 'react'
import Charts from '../../charts/Charts'
import Highcharts from 'highcharts'
import * as ChartModuleMore from 'highcharts/highcharts-more.js';
import HCSoldGauge from 'highcharts/modules/solid-gauge';
import { Typography } from '@mui/material';


const WashroomAqi = (props) => {
    ChartModuleMore(Highcharts);
    HCSoldGauge(Highcharts);
    const options = {
        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
            height: '90%'
        },
    
        title: {
            text: null
        },
    
        pane: {
            startAngle: -90,
            endAngle: 89.9,
            background: null,
            size: '60%'
        },
    
        // the value axis
        yAxis: {
            min: 0,
            max: 200,
            tickPixelInterval: 72,
            tickPosition: 'inside',
            tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
            tickLength: 20,
            tickWidth: 2,
            minorTickInterval: null,
            labels: {
                distance: 20,
                style: {
                    fontSize: '14px'
                }
            },
            plotBands: [{
                from: 0,
                to: 120,
                color: '#55BF3B', // green
                thickness: 20
            }, {
                from: 120,
                to: 160,
                color: '#DDDF0D', // yellow
                thickness: 20
            }, {
                from: 160,
                to: 200,
                color: '#DF5353', // red
                thickness: 20
            }]
        },
    
        series: [{
            name: 'AQI',
            data: [73.78],
            tooltip: {
                valueSuffix: 'CO2'
            },
            dataLabels: {
                format: '{y} CO2',
                borderWidth: 0,
                color: (
                    Highcharts.defaultOptions.title &&
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || '#333333',
                style: {
                    fontSize: '16px'
                }
            },
            dial: {
                radius: '80%',
                backgroundColor: 'gray',
                baseWidth: 12,
                baseLength: '0%',
                rearLength: '0%'
            },
            pivot: {
                backgroundColor: 'gray',
                radius: 6
            }
    
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    yAxis: {
                        labels: {
                            align: 'left',
                            x: 0,
                            y: -5
                        },
                        title: {
                            text: null
                        }
                    },
                    subtitle: {
                        text: null
                    },
                    credits: {
                        enabled: false
                    }
                }
            }]
        }
    
      }

    return (
        <>
         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Washroom (AQI)
            </Typography>
             <Charts options={options}/>
        </>
           
    )
}

export default WashroomAqi