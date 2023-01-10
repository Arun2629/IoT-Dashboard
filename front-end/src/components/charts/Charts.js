import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


  
  const Charts = (props) => {
    const {options} = props
    return (
              <HighchartsReact
                highcharts={Highcharts}
                options={options}
                />
    )
  }

  export default Charts