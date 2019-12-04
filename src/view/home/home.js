import React from 'react';
import './home.css'
import Header from 'components/header/Header'
import { properties } from 'components/properties.js';


class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {message: '', email: ''}
    }
    
    render(){
        return(
            <div className = "homepage-wrapper">
                <Header loginStatus = {false}/>
                <div className = "homepage-elements">
                    <h1>Welcome!</h1>
                </div>
            </div>
            
        )
    }
}

export default Home