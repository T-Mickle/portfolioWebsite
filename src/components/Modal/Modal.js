
import ClickOutside from '../components/clickOutside/ClickOutside'
import Nav from '../Nav/Nav'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import React from 'react';

const Modal= (props) => {
  

    return ( 
       
        <ClickOutside > 
            <div >
            <Link to='/' className='close'></Link>
            <Nav class={'nav modalNav'}>  </Nav>
            <hr/>
            {props.children}
            </div>
        </ClickOutside>
        
        
    )
 }

 
export default Modal;


