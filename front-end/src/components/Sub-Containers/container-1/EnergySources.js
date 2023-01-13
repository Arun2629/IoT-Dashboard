import React from 'react'
import Charts from '../../charts/Charts'
import Typography from '@mui/material/Typography';


const EnergySources = (props) => {
    const energySourceData = [{source: 'Electricity', usage: 95.09}, {source: 'Diesel gen', usage: 0.08}]

    const data = energySourceData.map((ele) => {
        return {name: `${ele.usage} ${ele.source}`, y: ele.usage}
    })
    const options = {
        chart: {
            height: 150,
            outerHeight: '10%',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
        },
        title: {
            text: null
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            },
            
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true,

                
            }
        },
        series: [{
            name: 'Energy Source',
            colorByPoint: true,
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
                        Energy Sources
            </Typography>
        <Charts options={options}/>
        </>
    )
}

export default EnergySources