import React from 'react'

function Navbar(props) {
    const element = props.isLoggedin ?
    <ul className="navbar-nav">
        <li className='nav-item'><a href='#' className='nav-link'>Hello, {props.name}</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Logout</a></li>    
    </ul>
    :
    <ul className="navbar-nav">
        <li className='nav-item'><a href='/register' className='nav-link'>Register</a></li>
        <li className="nav-item"><a href="/login" className="nav-link">Login</a></li> 
    </ul>
    return (
        <div className='navbar navbar-expand-sm navbar-light bg-light'>
            <div className="navbar-brand">
                <a style={{color:'black'}} className="nav-link" href='/'>Satyam's Website</a>
            </div>
            <div className="navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link active">Contact</a>
                    </li>
                </ul>
                {
                    element
                }
            </div>
            
        </div>
    )
}

export default Navbar
