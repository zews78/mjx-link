import React from "react"
import Signuplink from "./signuplink"
import Logedinlink from "./logedinlink"
import "./navbar.css"
import Menu from "./images/menu.png"
import { NavLink } from 'react-router-dom';


const Navbar = ()=>{
    return(
        <>
        <div id="navbar">
            <img id="menu-icon" height="22px" width="auto" alt="menu" src={Menu} />
            <NavLink to="/">
            <div id='company-log'>
                <img id="company-ico" alt="icon" height="22px" width="auto" src={process.env.PUBLIC_URL + '/gps.png'}/>
                <h3 id="company-header">Med GO</h3>
            </div>
            </NavLink>
            {/* <ul type="none">
                <li><a href="*">Home</a></li>
                <li><a href="*">About</a></li>
                <li><a href="*">Blog</a></li>
                <li><a href="*">Jobs</a></li>

            </ul> */}
            <div className="login-signup">
                <Signuplink />
                {/* <Logedinlink /> */}
            </div>



        </div>
        
        </>
    )
}

export default Navbar