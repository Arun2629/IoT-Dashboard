import React from 'react'
import { Card, CardContent, Typography, Button } from '@mui/material'
import { CarRepair, EnergySavingsLeaf} from '@mui/icons-material'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const AirQualityIndex = (props) => {

    return (
        <>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant='h4'>
                        910 
                    </Typography>
                    <Typography variant='subtitle1'>
                        Air Pressure
                    </Typography>
                    <Typography variant='h4'>
                        24 
                    </Typography>
                    <Typography variant='subtitle1'>
                        Temperature
                    </Typography>
                 </CardContent>
             </Card>
        </>
    )
}

export default AirQualityIndex 