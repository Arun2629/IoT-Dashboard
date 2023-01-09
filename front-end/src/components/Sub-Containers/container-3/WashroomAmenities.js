import React from 'react'
import { Card, CardContent } from '@mui/material'
import Charts from '../../charts/Charts'



const WashroomAmenities = (props) => {
    const options = {
        chart: {
            marginTop: 40
        },
        title: {
            text: 'Tissues'
        },
        yAxis: {
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
        series: [{
            data: [{
                y: 275,
                target: 250
            }]
        }]
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

export default WashroomAmenities