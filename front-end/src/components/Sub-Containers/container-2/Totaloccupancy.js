import React from 'react'
import Charts from '../../charts/Charts'
import Highcharts from 'highcharts'
import { Typography } from '@mui/material'



const TotalOccupancy = (props) => {
    const occupancyData = [{time: 9, occupancy: 8} ,{time: 10, occupancy: 10},
                            {time: 11, occupancy: 25}, {time: 12, occupancy: 40},
                            {time: 13, occupancy: 28}, {time: 14, occupancy: 20}]

    const data = occupancyData.map((ele) => {
        return {x:ele.time, y: ele.occupancy}
    })
    const options = {
        chart: {
            height: 200,
            zoomType: 'x',
            
        },
        title: {
            text: null
        },
        xAxis: {
            type: 'datetime'
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            name: 'Total Occupancy',
            data: data
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
                        Total Occupancy
            </Typography>
            <Charts options={options}/>
       </>
    )
            
}

export default TotalOccupancy