import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


  
  const Charts = (props) => {
    const {options} = props
    return (
        <div>
             <HighchartsReact
                highcharts={Highcharts}
                options={options}
                />
        </div>
    )
  }

  export default Charts