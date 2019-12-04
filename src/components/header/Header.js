import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        var page;
        if(this.props.loginStatus === false){
            page =  <div className="header-right">
                            <Link className = 'signup' to='/signup'>New? Sign Up</Link>
                            <Link className = 'header-nav' to= '/login'>Log In</Link>
                        </div>
        }else{
            page =  <div className="header-right">
                        <Link className = 'signup' to='/logout'> Log Out </Link>
                        <Link className = 'signup' to='/instructorProfile'> Profile </Link>
                    </div>
        }
        return(
            <div className= 'header'>
                <div className = 'header-left'>
                    <Link className = 'name' to = '/'>
                    {/* <img className="logo" src = {require('src/images/logo.png')}/> */}
                        Black Belt USA</Link>
                </div>
                {page}
                
            </div>
        )
    }
}

export default Header
