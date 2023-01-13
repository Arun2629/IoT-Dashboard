import { Typography, Box } from '@mui/material'
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
        <Box
        sx={{backgroundColor: 'white', height: '23vh'}}>

                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Energy Consumption
                    </Typography>
                    <Typography variant='h4' sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 5}}>
                        {energyInKw} 
                            Kw
                    </Typography>
        </Box>
    )
}

export default EnergyConsumption