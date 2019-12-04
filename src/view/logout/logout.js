import React from 'react'
import './logout.css'
import Header from 'components/header/Header'
import { properties } from 'components/properties.js';

class Logout extends React.Component{
    constructor(props){
        super(props);
    }
    goBack(){
        window.location.href = '/'
    }
    logOut(){
        event.preventDefault();
        fetch(properties.host + 
            "/authentication/logOut",{
            method: 'POST',
            credentials: "include",
            mode: "cors"
        }).then(res => res.json()).then(window.location.href = '/')
    }
    render(){
        return(
            <div>
                <Header loginStatus = {true}></Header>
                <div className = "logout-elements">
                    <h1>Are you sure you want to log out?</h1>
                    <button onClick = {this.logOut.bind(this)}>Yes</button>
                    <button onClick = {this.goBack.bind(this)}>No</button>
                </div>
            </div>
        )
    }
}

export default Logout