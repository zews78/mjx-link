import React from "react"
import {NavLink} from 'react-router-dom'

const logedinlink = ()=>{
    return(
        <div className='flex-club'>
            <div className="box"><NavLink to='/'>logout</NavLink></div>
            <div className="box"><NavLink to='/cart'>cart</NavLink></div>
            <div className="box"><NavLink to='/profile'>profile</NavLink></div>
            
        </div>
    )
}

export default logedinlink