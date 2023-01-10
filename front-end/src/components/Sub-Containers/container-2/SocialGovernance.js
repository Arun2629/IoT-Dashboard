import React from 'react'
import Charts from '../../charts/Charts'



const SocialGovernance = (props) => {
    const options = {
        chart: {
            renderTo: 'container',
            type: 'pie',
        },
        title: {
            text: 'Environmental Social Governance',
            align: 'left'
        },
        yAxis: {
            title: {
                text: 'Total percent market share'
            }
        },
        plotOptions: {
            pie: {
                shadow: false
            }
        },
        series: [{
            name: 'Social',
            data: [["E",6]],
            size: '60%',
            innerSize: '70%',
            showInLegend:true,
            dataLabels: {
                enabled: false
            }
        }]
      }

    return (
       <Charts options={options}/>
    )
}

export default SocialGovernance