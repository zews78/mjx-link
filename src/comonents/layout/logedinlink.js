import React from "react"
import {NavLink} from 'react-router-dom'

const logedinlink = ()=>{
    return(
        <div>
            <span><NavLink to='/'>logout</NavLink></span>
            <span><NavLink to='/cart'>cart</NavLink></span>
            <span><NavLink to='/profile'>profile</NavLink></span>
            
        </div>
    )
}

export default logedinlink