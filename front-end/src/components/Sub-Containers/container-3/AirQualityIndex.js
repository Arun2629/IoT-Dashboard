import React from 'react'
import { Box,Typography} from '@mui/material'


const AirQualityIndex = (props) => {

    return (
        <Box
        sx={{backgroundColor: 'white', height: '29.5vh'}}>
            <Box
            sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 3}}>
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
            </Box>
                  
        </Box>
    )
}

export default AirQualityIndex 