import React from 'react'
import { CardMedia, Grid, Card } from '@mui/material'
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
            <Grid container spacing={2} marginTop={2} height={10} >
                <Grid item xs={4}>
                    <Image/>
                </Grid>
                <Grid item xs={2} >
                    <EnergyConsumption/>  
                </Grid>
                <Grid item xs={2}>
                    <Card sx={{height: 400}}>
                        <CardMedia component={EnergySources}/>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <CardMedia component={EnergyConHistory}/>
                    </Card>
                </Grid>
                <Grid item xs={3} >
                    <AlertDisplay/>
                </Grid>
                <Grid item xs={3} >
                    <Card sx={{position: 'relative', bottom: '50%', height: 390}}>
                        <CardMedia component={TotalOccupancy}/>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <CardMedia component={BookedDesks}/>
                    </Card>
                </Grid>
                 <Grid item xs={2}>
                    <FaultReports/>
                </Grid>
                <Grid item xs={3}>
                    <Card sx={{position: 'relative', bottom: '60%', height: '100%'}}>
                        <CardMedia component={SocialGovernance}/>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card sx={{position: 'relative', bottom: "50%"}}>
                        <CardMedia component={BookingRooms}/>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <AirQualityIndex/>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardMedia component={WashroomAmenities}/>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card>
                        <CardMedia component={WashroomAqi}/>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Feedback/>
                </Grid>
            </Grid>
          
          
        </div>
    )
}

export default MainContainer