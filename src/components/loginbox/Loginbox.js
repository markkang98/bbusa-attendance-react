import React from 'react'
import './Loginbox.css'
import { properties } from 'components/properties.js';


class Loginbox extends React.Component{
  constructor(props){
    super(props)
    this.state = {email: "", password: "", type: "Instructor", status: ""}
  }
  logIn(){
    event.preventDefault();
      fetch(properties.host + 
        "/authentication/login?userid=" + this.state.email + 
        "&password=" + this.state.password,{
        method: 'POST',
        credentials: "include",
        mode: "cors"
      }).then(res => res.status).then(
        (response)=>{
          if(response == 412){
            this.setState({status: "Your authentication is incorrect. Try again"})
          }else{
            this.checkType()
          }
        })
  }
  checkType(){

    if(this.state.type == "Instructor"){
      this.checkInstructor()
      
    }else if(this.state.type == "Parent"){
      this.checkParent()
    }else if(this.state.type == "Student"){
      this.checkStudent()
    }
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
        if(response.length == 0){
          this.setState({status: "Your permissions are incorrect. Try again"})
        }else{
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
    }).then(res => res.json).then(
      (response)=>{
        if(response.length == 0){
          this.setState({status: "Your permissions are incorrect. Try again"})
        }else{
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
        if(response.length == 0){
          this.setState({status: "Your permissions are incorrect. Try again"})
        }else{
          window.location.href = "/student";
        }
      })
  }

  emailChange(event){
    this.setState({email: event.target.value})
  }
  passwordChange(event){
    this.setState({password: event.target.value})
  }
  typeChange(event){
    this.setState({type: event.target.value})
  }
    render(){
        return(
            <div className = 'signup-form-wrapper'>
            <div className = 'signup-form'>
              <form>
                <div>
                  <label className = 'signup-label'>Email </label>
                  <input onChange = {this.emailChange.bind(this)}className = 'signup-input' type = 'text'></input>
                </div>
                <div>
                  <label className= 'signup-label'>Password</label>
                  <input onChange = {this.passwordChange.bind(this)} className = 'signup-input' type = 'password'></input>
                </div>
                <div>
                <label className= 'signup-label'>Log In As</label>
                <select onChange = {this.typeChange.bind(this)} className = 'signup-input'>
                            <option>Instructor</option>
                            <option>Student</option>
                            <option>Parent</option>
                        </select>
                </div>
                <h2>{this.state.status}</h2>
                <button onClick = {this.logIn.bind(this)}>Submit</button>
              </form>
            </div>
          </div>  
        )
    }
}
export default Loginbox