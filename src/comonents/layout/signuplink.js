import React from "react"
import {NavLink} from 'react-router-dom'
import "./signuplink.css"

const Signuplink = ()=>{
    return(
        <div className="flex-club">
            <NavLink to='/'><div className="box">Login </div></NavLink>
            <NavLink to='/signUp'><div className="box">Signup</div></NavLink>
     

        </div>
    )
}

export default Signuplink