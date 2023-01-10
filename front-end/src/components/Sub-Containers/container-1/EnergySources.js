import React from 'react'
import Charts from '../../charts/Charts'


const EnergySources = (props) => {
    const energySourceData = [{source: 'Electricity', usage: 95.09}, {source: 'Diesel gen', usage: 0.08}]

    const data = energySourceData.map((ele) => {
        return {name: `${ele.usage} ${ele.source}`, y: ele.usage}
    })
    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
        },
        title: {
            text: 'Energy Sources',
            align: 'left'
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
        }]
      }

    return (
       
            <Charts options={options}/>
    )
}

export default EnergySources