import React from 'react'
import { Card, CardContent, Typography} from '@mui/material'


const AirQualityIndex = (props) => {

    return (
        <>
            <Card sx={{width: '50%'}}>
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