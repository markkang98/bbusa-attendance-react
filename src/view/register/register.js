import React from 'react';
import Header from 'components/header/Header'
import { properties } from 'components/properties.js';
import './register.css'

import RegisterBox from 'components/registerbox/RegisterBox'
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {classes: []}
    }

    componentDidMount(){
        var endpoint = "/authentication/getCurrentUser";
        fetch( properties.host + endpoint,{
            method: 'GET',
            credentials: "include",
            mode: "cors"
        }).then(res=>res.text()).then((response) => {
            if(response.length !== 0){
                this.setState({currentUser: response})
                console.log(response)
                this.getAllClasses()
            }else{
                window.location.href = "/";
            }
        })
    }
    getAllClasses(){
        var endpoint = "/getAllClasses";
        fetch( properties.host + endpoint,{
            method: 'GET',
            credentials: "include",
            mode: "cors"
        }).then(res=>res.json()).then((response) => {
            
        })
    }

    render(){
        return(
            <div>
                <Header profileLink = "/studentProfile" loginStatus= {true}></Header>
                <div className = "class-list">
                    {this.state.classes}
                </div>
            </div>
        )
    }
}

export default Register