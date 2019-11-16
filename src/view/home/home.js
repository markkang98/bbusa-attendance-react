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
        var headers = new Headers();

        headers.append('Authorization', "ijackson@hotmail.com");
         fetch("https://ec2-user@ec2-54-162-54-1.compute-1.amazonaws.com:9443/getClassList",{
            method: 'GET',
            credentials: "include",
            mode: "cors",
            headers: headers
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