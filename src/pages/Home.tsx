import TimeForm from '@/components/TimeForm'
import React from 'react'
import TimeChart from '@/components/TimeChart'

const Home = () => {
    const [data,setData] = React.useState<{activity:string,hours:number,color:string}[]>([])

    const handleData = (activity:string,hours:number,color:string)=>{
     const newData = [...data, { activity, hours,color }]
      setData(newData)
      localStorage.setItem("timeTrackerData", JSON.stringify(newData))
    }
    const calTotalHours = () => data.reduce((total, item) => total + item.hours, 0);
    console.log(data,"hours")
   // Load from localStorage on mount
    React.useEffect(() => {
      try{
        const storedData = localStorage.getItem("timeTrackerData");
      if(storedData){
        setData(JSON.parse(storedData))
      }
      }
      catch(e){
        console.error("Failed to load data from localStorage", e);
      }
    },[])
    
  return (
    <div>
      <h1 className="text-2xl font-bold flex ">⌚ Time Tracker</h1>
      <TimeForm onAdd = {handleData}/>
      <div
        className={`p-3 rounded-md text-center font-semibold ${
          calTotalHours() > 24 ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
        }`}
      >
        Total Hours: {calTotalHours()} / 24
        {calTotalHours() > 24 && <p className="text-sm">⚠ You’ve exceeded 24 hours!</p>}
      </div>
      {data.length > 0 ? (<TimeChart data={data}/>) : (<p className='text-center text-gray-500'>No data available</p>)}
    </div>
  )
}

export default Home
