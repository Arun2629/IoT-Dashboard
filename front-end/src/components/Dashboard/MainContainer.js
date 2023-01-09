import React from 'react'
import { Grid } from '@mui/material'
import Image from "../Sub-Containers/container-1/Image";
import EnergyConsumption from "../Sub-Containers/container-1/EnergyConsumption";
import EnergySources from "../Sub-Containers/container-1/EnergySources";
import EnergyConHistory from "../Sub-Containers/container-1/EnergyConHistory";
import AlertDisplay from "../Sub-Containers/container-1/AlertDisplay";
import BookingRooms from "../Sub-Containers/container-3/BookingRooms";
import AirQualityIndex from "../Sub-Containers/container-3/AirQualityIndex";
import WashroomAmenities from "../Sub-Containers/container-3/WashroomAmenities";
import WashroomAqi from "../Sub-Containers/container-3/WashroomAqi";
import Feedback from "../Sub-Containers/container-3/Feedback";
import TotalOccupancy from "../Sub-Containers/container-2/Totaloccupancy";
import BookedDesks from "../Sub-Containers/container-2/BookedDesks";
import SocialGovernance from "../Sub-Containers/container-2/SocialGovernance";
import FaultReports from "../Sub-Containers/container-2/FaultReports";

const MainContainer = (props) => {
    

    return (
        <div className='main-container'>
            <Grid container spacing={2} marginTop={2} height={10}>
            <Grid item xs={4}>
                    <Image/>
                </Grid>
                <Grid item xs={2}>
                <EnergyConsumption/>  
                </Grid>
                <Grid item xs={2}>
                <EnergySources/> 
                </Grid>
                <Grid item xs={4}>
                    <EnergyConHistory/>
                </Grid>
                <Grid item xs={5} >
                    <AlertDisplay/>
                </Grid>
                <Grid item xs={3} >
                <TotalOccupancy/>
                </Grid>
                <Grid item xs={4}>
                    <BookedDesks/>
                </Grid>
                <Grid item xs={3}>
                <SocialGovernance/>
                </Grid>
                <Grid item xs={4}>
                <FaultReports/>
                </Grid>
                <Grid item xs={4}>
                <BookingRooms/>
                </Grid>
                <Grid item xs={3}>
                <AirQualityIndex/>
                </Grid>
                <Grid item xs={3}>
                <WashroomAmenities/>
                </Grid>
                <Grid item xs={3}>
                <WashroomAqi/>
                </Grid>
                <Grid item xs={3}>
                <Feedback/>
                </Grid>
            </Grid>
          
          
        </div>
    )
}

export default MainContainer