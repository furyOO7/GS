import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = (props) => {
    const navStyle = {
        textDecoration: "none"
    }
    return ( 
        <div className="nav-container">
            
                <div className="nav-child">
                <Link to="/" style={navStyle}>
                    <span className="nav-text">Home</span>
                    </Link>
                </div>
            
                <div className="nav-child">
            <Link to="/about" style={navStyle}>
                    <span className="nav-text">About</span>
            </Link>
                </div>
                <div className="nav-child">
            <Link to="/about" style={navStyle}>
                    <span className="nav-text">About</span>
            </Link>
                </div>
                <div className="nav-child">
            <Link to="/about" style={navStyle}>
                    <span className="nav-text">About</span>
            </Link>
                </div>
                <div className="nav-child">
            <Link to="/about" style={navStyle}>
                    <span className="nav-text">About</span>
            </Link>
                </div>
                <div className="nav-child">
            <Link to="/about" style={navStyle}>
                    <span className="nav-text">About</span>
            </Link>
                </div>
                <div className="nav-child">
            <Link to="/about" style={navStyle}>
                    <span className="nav-text">About</span>
            </Link>
                </div>
        </div>
     );
}
 
export default Navbar;