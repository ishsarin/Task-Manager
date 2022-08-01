import React from 'react'
import Button from './Button'
import { useLocation } from 'react-router-dom'



const Header = ({title,onAdd,showAdd}) => {

    // const click = ()=>{
    //     console.log("click")
    // }

    // const btnText = "Add"

const location = useLocation();


  
  return (
    
      <header>

      {  location.pathname === "/about" ?  <h1>About Page</h1>  : <h1>Task Tracker {title}</h1>}
      { location.pathname==='/' &&<Button color = {showAdd ? 'red' : 'green'} text = {showAdd ? 'Close' : 'Add'} clickFunc = {onAdd} />
    }
    </header>
  )
}



Header.defaultProps = {
    name:'sarin',
  }

export default Header
