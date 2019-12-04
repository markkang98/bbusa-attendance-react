import React from 'react'
import './Signupbox.css'
import { properties } from 'components/properties.js';

class Signupbox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {email: "", password: "", firstName: "", lastName: "", belt: ""};
      }

    onSend(){
      event.preventDefault();
      fetch(properties.host + 
        "/authentication/registration?userid=" + this.state.email + 
        "&password=" + this.state.password + 
        "&firstName=" + this.state.firstName + 
        "&lastName=" + this.state.lastName,{
        method: 'POST',
        credentials: "include",
        mode: "cors"
      }).then(res => res.json()).then((response)=>console.log(response))
      .then(()=>
      {
        this.createInstructor()
      })
    }

    createInstructor(){
      fetch(properties.host + 
        "/createInstructor?instructor=" + this.state.email + 
        "&belt=" + this.state.belt, {
        method: 'PUT',
        credentials: "include",
        mode: "cors"
      }).then(res => res.json).then((response)=>console.log(response))
      .then(()=>
      {
        window.location.href = "/login";
      })
    }
    onFirstNameChange(event){
      this.setState({firstName: event.target.value})
    }
    onLastNameChange(event){
      this.setState({lastName: event.target.value})
    }

    onEmailChange(event){
      this.setState({email: event.target.value})
    }

    onPasswordChange(event){
      this.setState({password: event.target.value})
    }
    onBeltChange(event){
      this.setState({belt: event.target.value})
    }



    render() {
        return (
          <div className = 'signup-form-wrapper'>
            <div className = 'signup-form'>
              <form>
                <div className = 'half'>
                <div className = 'half-input'>
                  <label className = 'signup-label'>First Name</label>
                  <input onChange = {this.onFirstNameChange.bind(this)} className= 'signup-input' type = 'text'></input>
                </div>
                <div className = 'half-input'>
                  <label className = 'signup-label'>Last Name</label>
                  <input onChange = {this.onLastNameChange.bind(this)} className = 'signup-input' type = 'text'></input>
                </div>
                </div>
                <div>
                  <label className = 'signup-label'>Email </label>
                  <input onChange = {this.onEmailChange.bind(this)} className = 'signup-input' type = 'text'></input>
                </div>
                <div>
                  <label className= 'signup-label'>Password</label>
                  <input onChange = {this.onPasswordChange.bind(this)} className = 'signup-input' type = 'password'></input>
                </div>
                <div>
                  <label className= 'signup-label'>Belt</label>
                  <input onChange = {this.onBeltChange.bind(this)} className = 'signup-input' type = 'text'></input>
                </div>
                <button onClick = {this.onSend.bind(this)}>Submit</button>
              </form>
            </div>
          </div>  
        )
      }
}

export default Signupbox