import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Switch, FormControlLabel, IconButton } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { deepOrange } from '@mui/material/colors';





const TopNav = (props) => {
    const {handleOpen} = props
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const orange = deepOrange

  const dateTimeHandler = () => {
    const currDate = new Date().toDateString()
    const currTime = new Date().toLocaleTimeString()
    setDate(currDate)
    setTime(currTime)
  }

  useEffect(() => {
    dateTimeHandler()
  },[])

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token')
    props.history.push('/')
  }

  return (
        <Toolbar variant='dense' >
           <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={handleOpen}
            sx={{ mr: 2, backgroundColor: '#ff4800' }}
          >
            <AppsOutlinedIcon fontSize='small' sx={{color: 'white'}}/>
          </IconButton>
            
       
          <Typography  variant="h4"  className='comp-name' sx={{ flexGrow: 1 }}>
            nhance
          </Typography >
            
          <Typography variant="subtitle2" component="div" sx={{marginRight:"1%"}} >
            {time} | {date}
          </Typography>
          
            <FormControlLabel control={<Switch color='default' />} label="Dark Mode" />
              <Avatar
                size="small"
                onClick={handleMenu}
                sx={{marginRight: "1%", height: '30px', width: '30px', position: 'relative', bottom: 3}}
              >
                S
              </Avatar>

              <Avatar sizes='small' 
                      onClick={handleLogout}
                      sx={{height: '30px', width: '30px', position: 'relative', bottom: 3}}>
                <LogoutIcon/>
              </Avatar>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
        </Toolbar>
  );
}

export default withRouter(TopNav)