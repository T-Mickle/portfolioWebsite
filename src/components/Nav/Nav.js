import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Nav(props) {
    return (
        <div className={`${props.class}`}>
            <Link to='/projects' className='nav__button'> Projects</Link> 
             <Link to='/about' className='nav__button'> About Me </Link> 
             <Link to='/contact' className='nav__button'> Contact Info </Link> 
             <Link to='/resume' className='nav__button'> Resume </Link> 


        </div>
    )
}


export default Nav;