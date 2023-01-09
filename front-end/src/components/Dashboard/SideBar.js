import React from 'react'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {HomeRounded, 
        ArticleRounded, 
        HubRounded, 
        TvRounded, 
        BookRounded, 
        BugReportRounded, 
        AnalyticsRounded, 
        SettingsRounded,
        FilterListRounded, 
        SupportAgentRounded,
        CloseRounded} from '@mui/icons-material';
import { Box } from '@mui/system';
import { Button } from '@mui/material';



const SideBar = (props) => {
    const {open, handleOpen} = props

    const renderIcons = (index) => {
        if(index === 0){
            return <HomeRounded/>
        }else if(index === 1){
            return <ArticleRounded/>
        }else if(index === 2){
            return <HubRounded/>
        }else if(index === 3){
            return <TvRounded/>
        }else if(index === 4){
            return <BookRounded/>
        }else if(index === 5){
            return <BugReportRounded/>
        }else if(index === 6){
            return <AnalyticsRounded/>
        }else if(index === 7){
            return <FilterListRounded/>
        }else if(index === 8){
            return <SettingsRounded/>
        }else if(index === 9){
            return <SupportAgentRounded/>
        }
    }

    const list = (handleOpen) => (
        <Box
          role="presentation"
        >
          <List>
            {['Home', 'Digital Twin', 'Asset Management', 'IoT Device Management', 'TV Dashboard', 'Log History', 'Fault Reporting', 'Analytics & Reporting', 'Settings', 'Support'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {renderIcons(index)}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
    
    return (
        <div>
            <Drawer
            anchor={"left"}
            open={open}
            onClose={handleOpen}
            >
            <Button onClick={handleOpen}><CloseRounded/></Button>
            {list()}
          </Drawer>
        </div>
    )
}

export default SideBar