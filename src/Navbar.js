import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () =>{
    return(
        <ul className="mynav">
            <Link to="/Home"><li>Home</li></Link>
            <Link to="/About"><li>About</li></Link>
            <Link to="/dashbord"><li>Dashbord</li></Link>
        </ul>
    )
}
export default Navbar;