import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@mui/material'




const Feedback = (props) => {
    const [value, setValue] = useState(3)
   
    return (
        <>
             <Card >
                <CardContent>
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                    >
                    <Typography variant='subtitle1'>Feedback</Typography>
                    <Rating name="read-only" value={value} readOnly />
                    <Typography variant='h4'>4.6</Typography>
                    <Typography component="legend">Average Rating</Typography>
                    </Box>
                 </CardContent>
             </Card>
        </>
    )
}

export default Feedback