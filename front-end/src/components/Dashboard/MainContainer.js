import React from 'react'
import {Grid} from '@mui/material'
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
import { Box } from '@mui/system';


const MainContainer = (props) => {
    

    return (
        <div className='main-container'>
           <Grid container spacing={1}>
                <Grid item xs={4} >
                    <Box
                    component={Image}>
                    </Box>
                </Grid>
                <Grid item xs={2} >
                    <EnergyConsumption/>
                </Grid>
                <Grid item xs={2}>
                    <Box
                    sx={{backgroundColor: 'white', borderRadius: 2}}
                    component={EnergySources}>
                    </Box>
                </Grid>
                <Grid item xs={4}  >
                    <AlertDisplay/>
                </Grid>
                <Grid item xs={4} sx={{position: 'relative', left: 510, bottom: 200}}>
                <Box
                    sx={{backgroundColor: 'white', borderRadius: '10px'}}
                    component={EnergyConHistory}>
                    </Box>
                </Grid>
                </Grid>
            <Grid container spacing={1} marginTop={2}>
                <Grid item xs={3} >
                <Box
                    sx={{backgroundColor: 'white', borderRadius: 2}}
                    component={TotalOccupancy}>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <BookedDesks/>
                </Grid>
                <Grid item xs={3}>
                    <Box
                        component={SocialGovernance}>
                    </Box>
                </Grid>
                 <Grid item xs={3}>
                    <FaultReports/>
                </Grid>
            </Grid>
            <Grid container xs={12} spacing={1} marginTop={2}>
                <Grid item xs={3}>
                    <Box
                     component={BookingRooms}>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <AirQualityIndex/>
                </Grid>
                <Grid item xs={1.5}>
                    <Box
                    sx={{height: '29.5vh', backgroundColor: 'white'}}>
                        <WashroomAqi/>
                    </Box>
                </Grid>
                <Grid item xs={1.5}>
                    <Box
                    component={WashroomAmenities}>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Feedback/>
                </Grid>
            </Grid>
          
          
        </div>
    )
}

export default MainContainer