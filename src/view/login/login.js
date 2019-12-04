import React from 'react';
import './login.css'
import Header from 'components/header/Header'
import Loginbox from 'components/loginbox/Loginbox'

class Login extends React.Component{
    render(){
        return(
            <div>
                <Header loginStatus = {false}/>
                <Loginbox></Loginbox>
            </div>
        )
    }
}

export default Login