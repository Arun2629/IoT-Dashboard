import React from 'react'
import {Typography, Button, Box } from '@mui/material'
import { CarRepair, EnergySavingsLeaf} from '@mui/icons-material'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const FaultReports = (props) => {
    const parkingData = {   totalCapacity: 200,
                            currOccupancy: 180,
                            recordedAt: new Date()}

    const energyData = {output: 150,
                        input: 650,
                        recordedAt: new Date()}

    const parkingSlotsLeft = parkingData.totalCapacity - parkingData.currOccupancy
    const energyEfficiency = Math.round((energyData.output/energyData.input) * 100)

    return (
        <Box
        sx={{backgroundColor: 'white', paddingLeft: 1, marginRight: 2, height: '29.5vh'}}>
             <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Fault Reports
            </Typography>
                    <Typography variant='subtitle1' sx={{fontSize: 14}}>
                        <Button><CarRepair/></Button>
                        <Button><EnergySavingsLeaf/></Button> Parking slots {parkingSlotsLeft > 50 ? "getting filled" : "almost full"}
                    </Typography>
                    <span>{formatDistanceToNow(
                     parkingData.recordedAt
                    )}</span>
                    <Typography variant='subtitle1'  sx={{fontSize: 14}}>
                    <Button><CarRepair/></Button>
                        <Button><EnergySavingsLeaf/></Button> Energy Utilization increased by {energyEfficiency} %
                    </Typography>
                    <span>{formatDistanceToNow(
                     energyData.recordedAt
                    )}</span>
        </Box>
    )
}

export default FaultReports