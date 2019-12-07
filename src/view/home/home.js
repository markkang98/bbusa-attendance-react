import React from 'react';
import './home.css'
import Header from 'components/header/Header'
import { properties } from 'components/properties.js';


class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {status: '', email: '', loggedin: false, loading: true}
        var endpoint = "/authentication/getCurrentUser";
        fetch( properties.host + endpoint,{
            method: 'GET',
            credentials: "include",
            mode: "cors"
        }).then(res=>res.text()).then((response) => {
            if(response.length !== 0){
                this.setState({email: response})
                this.checkInstructor()
                this.checkParent()
                this.checkStudent()
                this.setState({loggedin: true});
            }
        }).then(()=>{
            this.setState({loading: false})
        })
    }
    checkInstructor(){
        console.log("works")
        fetch(properties.host +
          "/checkInstructor?userid=" + this.state.email,{
          method: 'GET',
          credentials: "include",
          mode: "cors"
        }).then(res => res.json()).then(
          (response)=>{
            if(response.length != 0){
                window.location.href = "/instructor";
            }
          })
      }

      checkParent(){
        fetch(properties.host +
          "/checkParent?userid=" + this.state.email,{
          method: 'GET',
          credentials: "include",
          mode: "cors"
        }).then(res => res.json()).then(
          (response)=>{
            if(response.length != 0){
                window.location.href = "/instructor";
            }
          })
      }

      checkStudent(){
        fetch(properties.host +
          "/checkStudent?userid=" + this.state.email,{
          method: 'GET',
          credentials: "include",
          mode: "cors"
        }).then(res => res.json()).then(
          (response)=>{
            if(response.length != 0){
                window.location.href = "/student";
            }
          })
      }

    render(){
        if (this.state.loggedin || this.state.loading) {
            return <div />
          }else{
        return(
            <div className = "homepage-wrapper">
                <Header loginStatus = {false}/>
                <div className = "homepage-elements">
                    <h1>Welcome!</h1>
                     <img className="karate" src = {require('src/images/karate.png')}/>
                </div>
            </div>

        )
          }
    }
}

export default Home
