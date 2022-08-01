import React from 'react'

import { useState } from 'react'


export const AddTask = ({onAdd}) => {

    const [text,setText] = useState('');
    const [day,setDay] = useState('');
    const [reminder,setReminder] = useState(false);
    

    const onSubmit = (e)=>{

        e.preventDefault();

        if(!text){
        alert("Please add text");
            return;
        }
        
        if(isNaN(day)){

            alert("Please enter the date in Number");
            return;
        }


        onAdd({text,day,reminder})



    }

  return (
    <form className='add-form' action=""  onSubmit={onSubmit} >
    <div className='form-control'>
        <label htmlFor="">Task</label>
        <input type="text" placeholder='Add Task'  value={text} onChange={(e)=>{
            setText(e.target.value)
        }} />
    </div>
    <div className='form-control'>
        <label htmlFor="">Date</label>
        <input type="text" placeholder='Add Date'  value={day} onChange={(e)=>{
            setDay(e.target.value)
        }}/>
    </div>
    <div className='form-control-check'>
        <label htmlFor="">Reminder</label>
        <input type="checkbox" placeholder=''  value={reminder} onChange={(e)=>{
            setReminder(e.currentTarget.checked)
        }}/>
    </div>
    <input type="submit" value='Save Task' className='btn btn-block'/>


    </form>
  )
}
