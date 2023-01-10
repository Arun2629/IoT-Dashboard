import React from 'react'
import Charts from '../../charts/Charts'



const BookingRooms = (props) => {
    const options = {
        title: {
            text: 'Booked Meeting rooms',
            align: 'left'
        },
    
        yAxis: {
            title: {
                text: 'Occupancy'
            }
        },
    
        xAxis: {
            title: {
                text: 'Time'
            },
            accessibility: {
                rangeDescription: 'Range: 10 to 5'
            }
        },
    
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },
    
        series: [{
            data: [10,20,30,16,12,22,40,21,60],
    }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
      }

    return (
       
            <Charts options={options}/>
    )
}

export default BookingRooms