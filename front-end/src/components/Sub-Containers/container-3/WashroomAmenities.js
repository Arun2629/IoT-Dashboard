import React from 'react'
import Charts from '../../charts/Charts'
import Highcharts from "highcharts";
import bullet from "highcharts/modules/bullet.js";

bullet(Highcharts);

const WashroomAmenities = (props) => {
   
    const options = {
        chart: {
            type: 'bullet',
            inverted: true,
            marginTop: 100,
        },
        title: {
            text: 'Washroom [FREE]'
        },
        xAxis: {
            categories: ['<span class="hc-cat-title">Tissues</span><br/>']
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
        }]
      }

    return (
      
            <Charts options={options}/>
    )
}

export default WashroomAmenities