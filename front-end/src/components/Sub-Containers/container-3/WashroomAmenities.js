import React from 'react'
import Charts from '../../charts/Charts'
import Highcharts from "highcharts";
import bullet from "highcharts/modules/bullet.js";
import { Typography } from '@mui/material';

bullet(Highcharts);

const WashroomAmenities = (props) => {
   
    const options = {
        chart: {
            height: 200,
            type: 'bullet',
            inverted: true,
            marginTop: 50,
        },
        title: {
            text: "Tissues"
        },
        yAxis: {
            gridLineWidth: 0,
            plotBands: [{
                from: 0,
                to: 150,
                color: '#666'
            }, {
                from: 150,
                to: 225,
                color: '#999'
            }, {
                from: 225,
                to: 9e9,
                color: '#bbb'
            }],
            title: null
        },
        plotOptions: {
            series: {
                pointPadding: 0.25,
                borderWidth: 0,
                color: '#000',
                targetOptions: {
                    width: '200%'
                }
            }
        },
        series: [{
            data: [{
                y: 275,
                target: 250
            }]
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 200
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
                Washroom  [FREE]
            </Typography>
         <Charts options={options}/>
      </>
    )
           
}

export default WashroomAmenities