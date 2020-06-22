import React from "react"
import {NavLink} from 'react-router-dom'


const Signuplink = ()=>{
    return(
        <div>
            <span><NavLink to='/'>Login</NavLink></span>
            <span><NavLink to='/signup'>Signup</NavLink></span>
            <hr></hr>

        </div>
    )
}

export default Signuplink