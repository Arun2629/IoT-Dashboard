import React from 'react'
import Charts from '../../charts/Charts'
import { Typography } from '@mui/material'



const BookedDesks = (props) => {
    const occupancyData = [{time: 9, occupancy: 8} ,{time: 10, occupancy: 10},
                            {time: 11, occupancy: 25}, {time: 12, occupancy: 40}]

    const data = occupancyData.map((ele) => {
        return [ele.time,ele.occupancy]
    })
    const options = {
        chart: {
            height: 200,
            type: 'column'
        },
        title: {
            text: null
        },
        yAxis: [{
            min: 0
        }, {
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0
            }
        },
        series: [{
            color: 'rgba(165,170,217,1)',
            data: data[0],
            pointPadding: 0.3,
            pointPlacement: -0.2
        }, {
            color: 'rgba(126,86,134,.9)',
            data: data[1],
            pointPadding: 0.4,
            pointPlacement: -0.2
        }, {
            color: 'rgba(248,161,63,1)',
            data: data[2],
            pointPadding: 0.3,
            pointPlacement: 0.2,
            yAxis: 1
        }, {
            color: 'rgba(186,60,61,.9)',
            data: data[3],
            pointPadding: 0.4,
            pointPlacement: 0.2,
            yAxis: 1
        }],
       
      }

    return (
        <>
         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Booked Desks
        </Typography>
        <Charts options={options}/>
        </>
            
   
    )
}

export default BookedDesks