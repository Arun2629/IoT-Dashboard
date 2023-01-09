import { Typography, Card, CardContent } from '@mui/material'
import React from 'react'

const EnergyConsumption = (props) => {
    const powerData = {
        powerConsumed: 11896.25,
        unit: 'watts'
    }

    const timeData = {
        duration: 8,
        unit: 'hours/day'
    }

    const energyInKw = (powerData.powerConsumed * (timeData.duration / 1000)).toFixed(2)

    return (
        <>
             <Card >
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                        Energy Consumption
                    </Typography>
                    <Typography variant='h4'>
                        {energyInKw} Kw
                    </Typography>
                 </CardContent>
             </Card>
        </>
    )
}

export default EnergyConsumption