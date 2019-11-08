import React from 'react';
import './home.css'
import Header from 'components/header/Header'
import { Link } from 'react-router-dom';



class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {message: ''}
    }
    getTrial(){
         fetch("https://ec2-54-162-54-1.compute-1.amazonaws.com:8443/trial?name=mark",{
            // fetch("https://localhost:8443/trial?name=mark",{
            method: 'GET',
            credentials: "include",
            mode: "cors"
        })
        .then(res => res.text()).then((response)=>{
            console.log(response)
            this.setState({message: response})
        })
    }

    render(){
        return(
            <div>
                <Header/>
                <button onClick = {this.getTrial.bind(this)}></button>
                {this.state.message}
                <Link to = "/login">Log In</Link>
                <Link to = '/signup'>Sign Up</Link>
            </div>
        )
    }
}

export default Home