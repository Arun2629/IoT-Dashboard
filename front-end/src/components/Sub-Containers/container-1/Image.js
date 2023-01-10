import React from 'react'
import { Card,CardMedia  } from '@mui/material'

const Image = (props) => {

    return (
        <Card sx={{paddingBottom: '0', marginBottom: '0'}}>
        <CardMedia
          component="img"
          height="194"
          image="https://www.incimages.com/uploaded_files/image/1920x1080/getty_1014168768_2000130420009280281_415027.jpg"
          alt="Office Interior"
        /> 
      </Card>
    )
}

export default Image