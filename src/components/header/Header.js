import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
class Header extends React.Component{
    render(){
        return(
            <div className= 'header'>
                <div className = 'header-left'>
                    <Link className = 'name' to = '/'>
                    {/* <img className="logo" src = {require('src/images/logo.png')}/> */}
                        OurGuider</Link>
                </div>
                <div className="header-right">
                    <Link className = 'signup' to='/signup'>New? Sign Up</Link>
                    <Link className = 'header-nav' to= '/login'>Log In</Link>
                </div>
            </div>
        )
    }
}

export default Header
