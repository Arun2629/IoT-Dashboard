import React from 'react'
import { Card,CardMedia  } from '@mui/material'

const Image = (props) => {

    return (
        <Card sx={{height: '30vh'}} >
        <CardMedia
          component="img"
          height="194"
          image="https://www.incimages.com/uploaded_files/image/1920x1080/getty_1014168768_2000130420009280281_415027.jpg"
          alt="Office Interior"
          sx={{position: 'relative', top: 70, height: '30vh'}}
        /> 
      </Card>
    )
}

export default Image