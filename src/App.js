import './App.css';
import Header from './components/Header'
import { Tasks } from './components/Tasks';
import { AddTask } from './components/AddTask';
import { useState } from 'react'
import { Footer } from './components/Footer';
import { About } from './components/About';

import React from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  const [tasks, setTasks] = useState(

    [
      {
        id: 1,
        text: 'this is new task 1',
        day: 'Feb 1',
        reminder: false,
      },
      {
        id: 2,
        text: 'this is new task 2',
        day: 'Feb 2',

        reminder: false,

      },
      {
        id: 3,
        text: 'this is new task 3',
        day: 'Feb 3',

        reminder: false,

      },
      {
        id: 4,
        text: 'this is new task 4',
        day: 'Feb 4',

        reminder: false,

      },
    ]
  )

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id
    ))
  }


  const toggle = (id) => {
    setTasks(tasks.map((task) =>
    (task.id === id ? { ...task, reminder: !task.reminder } : task
    )))
    //  console.log(id)   //this gives an object value. Hence we loop make a function in case of onClick function in Tasks.js
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);


  }


  const [showAddTask, setShowAddTask] = useState(false)


  return (

    <Router>

      <div className="container">



     <Header onAdd={() => {
          setShowAddTask(!showAddTask)
        }} showAdd={showAddTask} />


        <Routes>
          <Route path='/'   element={<>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggle} />) : ('No Tasks to Show')}

            </>} />


         <Route path='/about' element={<About/>} />
          </Routes>

        <Footer />
      </div>
    </Router>
  );
}



export default App;
