import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Button from './Button'

export const About = () => {


    // let navigate = useNavigate();



    //   const click = ()=>{
    //     navigate(-1);
    //   }
  return (
    <div>
   
        <p>This is the latest version

        </p>
        <Link to="/" style={{textDecoration:'none'}}>

        <Button  text='Go Back' />

        </Link>
        {/* <Button  onCLick = {click} text='Go Back'/> */}

    </div>
  )
}
