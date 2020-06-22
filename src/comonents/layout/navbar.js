import React from "react"
import Signuplink from "./signuplink"
import Logedinlink from "./logedinlink"


const Navbar = ()=>{
    return(
        <div>
            <h1>Handloom</h1>
            <Signuplink />
            <Logedinlink />
        </div>
    )
}

export default Navbar