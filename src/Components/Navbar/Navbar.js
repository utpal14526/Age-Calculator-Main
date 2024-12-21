import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <Link to='/about' style={{ textDecoration: "none" }}>
                <h1 style={{ color: "white" }}>
                    Calcly<span style={{ color: "green" }}>.net</span>
                </h1>
            </Link>


        </nav>
    )
}
