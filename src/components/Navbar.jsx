// A Menu bar on the top of webpage from where we can from where we can visit different pages of website
import React from 'react'
//use of functional component
function Navbar() {
    return (
        <nav className='nav-container'>
            <ul className='nav-link'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar