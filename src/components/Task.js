import React from 'react'
import {FaTimes }from 'react-icons/fa'
export const Task = ({task,onDelete,onToggle}) => {
  return (
    //here we need the value of the id, hence we are passing this through a function in onToggle
    <div className={`task  ${task.reminder===true ? 'reminder' : ''}`} onDoubleClick={()=>onToggle(task.id)} > 
        <h3 key = {task.id}>{task.text} <FaTimes   style={{color:'red', cursor:'pointer'}}  onClick = {()=>onDelete(task.id)} /></h3>
        <p>{task.day}</p>
    </div>
  )
}
