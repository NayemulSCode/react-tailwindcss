import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({toggle}) => {
    return (
        <nav className="flex justify-between h-16 items-center bg-white text-black relative shadow-sm font-mono"
        role="navigation"
        >
            <Link to="/" className="pl-8">
                NHS
            </Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link to="/" className="p-4">Home</Link>
                <Link to="/about" className="p-4">About</Link>
                <Link to="/menu" className="p-4">Menu</Link>
                <Link to="/product" className="p-4">Product</Link>
            </div>
        </nav>
    )
}

export default Navbar
