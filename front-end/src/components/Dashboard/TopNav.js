import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { IconButton, Switch, FormControlLabel } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';




const TopNav = (props) => {
    const {handleOpen} = props
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

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
    <div  className='nav-bar' >
      <AppBar position="static" color='transparent'>
        <Toolbar >
        <IconButton
                size="small"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleOpen}
                sx={{ mr: 2 }}
            >
            <MenuIcon />
          </IconButton>
          <Typography  variant="h4" component="h4" sx={{ flexGrow: 1}}>
            nhance
          </Typography >
            
          <Typography variant="subtitle2" component="div" sx={{marginRight:"1%"}} >
            {time} | {date}
          </Typography>
          
            <FormControlLabel control={<Switch color='default' />} label="Dark Mode" />
              <Avatar
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{marginRight: "1%"}}
              >
                S
              </Avatar>

              <Avatar sizes='small' onClick={handleLogout}>
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
      </AppBar>
    </div>
  );
}

export default withRouter(TopNav)