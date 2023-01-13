import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';





const Feedback = (props) => {
    const [value, setValue] = useState(3)
   
    return (
   
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '29.5vh'
                    }}
                    >
                    <Typography variant='subtitle1'>Feedback</Typography>
                    <Rating name="read-only" value={value} readOnly />
                    <Typography variant='h4'>4.6</Typography>
                    <Typography component="legend">Average Rating</Typography>
                    </Box>
       
    )
}

export default Feedback