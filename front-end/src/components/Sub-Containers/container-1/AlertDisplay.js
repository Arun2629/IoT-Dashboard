import React from 'react'
import { WarningAmber } from '@mui/icons-material'
import { Typography, Button, Box } from '@mui/material'
import { Call, PersonAdd} from '@mui/icons-material'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const AlertDisplay = (props) => {
    const airPressureData = {equipmentName: 'THINGSEE_AIR', 
                                parameter: 'AIR_PRESSURE', 
                                lowerLimit: 600, 
                                upperLimit: 800,
                                currentValue: 909.25,
                                recordedAt: new Date()}

    const luminsData = {equipmentName: 'THINGSEE_AIR', 
                        parameter: 'Lumins', 
                        lowerLimit: 10, 
                        upperLimit: 16,
                        currentValue: 13,
                        recordedAt: new Date()}

    const tvocData = {equipmentName: 'THINGSEE_AIR', 
                        parameter: 'Tvoc', 
                        lowerLimit: 0.3, 
                        upperLimit: 3,
                        currentValue: 4.8,
                        unit: 'mg/m^3',
                        recordedAt: new Date()}

    return (
        <Box
        sx={{backgroundColor: 'white', paddingLeft: 2, height: '100%', marginRight: 2}}>
             <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Alerts
            </Typography>
                    <Typography variant='subtitle1' sx={{fontSize: 12}}>
                        <WarningAmber sx={{color: 'red'}}/> {airPressureData.parameter} from {airPressureData.equipmentName} - 
                        {airPressureData.currentValue < airPressureData.upperLimit ? "LOW" : "HIGH"} - {airPressureData.currentValue}
                        <Button><Call/></Button>
                        <Button><PersonAdd/></Button>
                    </Typography>

                    <span>{formatDistanceToNow(
                     airPressureData.recordedAt
                    )}</span>
                    <Typography variant='subtitle1' sx={{fontSize: 12}}>
                        <WarningAmber sx={{color: 'yellow'}}/> {luminsData.parameter} from {luminsData.equipmentName} - 
                        {luminsData.currentValue < luminsData.upperLimit ? "LOW" : "HIGH"} - {luminsData.currentValue}
                        <Button><Call/></Button>
                        <Button><PersonAdd/></Button>
                    </Typography>
                    <span>{formatDistanceToNow(
                     luminsData.recordedAt
                    )}</span>
                    <Typography variant='subtitle1' sx={{fontSize: 12}}>
                        <WarningAmber sx={{color: 'yellow'}}/> {tvocData.parameter} from {tvocData.equipmentName} - 
                        {tvocData.currentValue < tvocData.upperLimit ? "LOW" : "HIGH"} - {tvocData.currentValue}
                        <Button><Call/></Button>
                        <Button><PersonAdd/></Button>
                    </Typography>
                    <span>{formatDistanceToNow(
                     tvocData.recordedAt
                    )}</span>
                    <Button>View All</Button>

        </Box>
    )
}

export default AlertDisplay