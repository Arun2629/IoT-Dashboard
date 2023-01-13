import React, {useState} from 'react'
import TopNav from './TopNav'
import SideBar from './SideBar'
import MainContainer from './MainContainer'

const DashboardContainer = (props) => {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }
   
    
    return (
        <div>
            <TopNav handleOpen={handleOpen} />
            <MainContainer />
            <SideBar open={open} handleOpen={handleOpen}/>
        </div>
    )
}

export default DashboardContainer