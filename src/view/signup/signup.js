import React from 'react';
import './signup.css'
import Header from 'components/header/Header'
import Signupbox from 'components/signupbox/Signupbox'

class Signup extends React.Component{
    render(){
        return(
            <div>
                <Header loginStatus = {false}></Header>
                <Signupbox></Signupbox>
            </div>
            
        )
    }
}

export default Signup