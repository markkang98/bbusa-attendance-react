import React from 'react';
import './home.css'
import Header from 'components/header/Header'
import { Link } from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Link to = "/login">Log In</Link>
                <Link to = '/signup'>Sign Up</Link>
            </div>
        )
    }
}

export default Home