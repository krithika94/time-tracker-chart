import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from './ui/button'

interface Props{
  onAdd: (activity: string, hours: number,color:string) => void;
}
const TimeForm = ({onAdd}:Props) => {
  const [activity, setActivity] = React.useState('')
  const [hours, setHours] = React.useState('')
  const [color, setColor] = React.useState('#3498db')

  const handleSubmit = () => {
    if(!activity.trim() || !hours){
      alert('Please fill in both fields.')
      return
    }
    onAdd(activity, Number(hours),color);
    setActivity('')
    setHours('')
    setColor('#3498db') // Reset color to default
  }

  return (
    <div className="space-y-4 flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
      <Input type="text" placeholder="Activity (e.g sleep)" value={activity} onChange={(e)=>setActivity(e.target.value)}/>
      <Input type="number" placeholder="Hours (e.g 8)" value={hours} onChange={(e)=>setHours(e.target.value)}/>
      <div className="flex items-center gap-3">
        <label className="text-sm">Pick Color:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-10 h-10 border rounded"
        />
      </div>
      <Button className="w-full bg-blue-500 text-white hover:bg-blue-600" onClick={handleSubmit}>
        Add Activity
      </Button>
    </div>
  )
}

export default TimeForm
