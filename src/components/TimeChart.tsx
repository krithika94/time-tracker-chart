import React from 'react'
import {Pie} from 'react-chartjs-2'
import {Chart as ChartJS,
ArcElement,Tooltip,Legend} from 'chart.js'

ChartJS.register(ArcElement,Tooltip,Legend)
interface Props {
  data: { activity: string; hours: number,color:string }[];
}
const TimeChart = ({data}:Props) => {
    const chartData = {
        labels:data.map(d=>d.activity),
        datasets:[{
            label:'Hours',
            data:data.map(d=>d.hours),
            backgroundColor:data.map(d=>d.color),
            borderColor:data.map(d=>d.color),
            borderWidth:1
        }]
    }


  return (
    <div>
      {chartData.labels.length > 0 ? (
        <Pie data={chartData} />) : (<p className='text-center text-gray-500'>No data available</p>)}
    </div>
  )
}

export default TimeChart
