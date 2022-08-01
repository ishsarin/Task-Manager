import React from 'react'
import { Link } from 'react-router-dom'

  import { useLocation } from 'react-router-dom'

export const Footer = () => {

    const {pathname}  = useLocation();

  const enter = (e)=>{
    
    e.target.style.color = 'red';

  }

    const leave = (e)=>{
      e.target.style.color = 'blue';
    }
  return (
    <footer>

    
     
   { pathname!=='/about' &&   <Link to="/about"   onMouseEnter={enter} onMouseLeave={leave} style={{textDecoration:'none'}}>About</Link>}
    <p> Copyright &copy; 2022</p>


    </footer>  
)
}
