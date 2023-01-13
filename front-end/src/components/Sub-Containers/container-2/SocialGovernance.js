import React from 'react'
import Charts from '../../charts/Charts'
import { Typography } from '@mui/material'



const SocialGovernance = (props) => {
    const options1 = {
        colors: ['#71BF45', '#5A5A5A'],
        chart: {
            height:200,
            type: 'pie'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        title: {
            text: null
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'ESG',
            colorByPoint: true,
            innerSize: '75%',
            data: [{
                name: 'E',
                y: 70
            },
        {
            y: 30
        }]
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
                Environmental Social Governance
            </Typography>
            <Charts options={options1}/>
        </>
              
    )
}

export default SocialGovernance