import React from 'react'
import { Typography, Card, CardContent } from '@mui/material'
import Charts from '../../charts/Charts'
import { Legend } from 'highcharts'


const EnergyConHistory = (props) => {
    const energyConsumptionData = [{source: 'Electricity', totalDays: 10, usage: [10.23,15.68,22.67,26.78,35.89,45.44,60.18,78.99,85.23,95.17]}, {source: 'Diesel gen',totalDays: 10, usage: [8.23,13.68,16.67,24.78,28.89,50.44,56.18,62.99,69.23,78.17]}]

    const seriesData = energyConsumptionData.map((ele) => {
        return {name: ele.source, data: ele.usage}
    })
    const options = {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Energy Consumption History',
            align: 'left'
        },
        yAxis: {
            labels: {
                formatter: function () {
                    return this.value;
                }
        }
    },
        tooltip: {
            pointFormat: '{series.name} was consumed <b>{point.y:,.0f}</b><br/>kw in {point.x} days'
        },
        plotOptions: {
            area: {
                pointStart: 0,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: seriesData
      }

    return (
        <>
             <Card >
                <CardContent>
                    <Charts options={options}/>
                 </CardContent>
             </Card>
        </>
    )
}

export default EnergyConHistory