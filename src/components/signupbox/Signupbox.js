import React from 'react'
import './Signupbox.css'
import { properties } from 'components/properties.js';

class Signupbox extends React.Component{
    constructor(props) {
        super(props);
        this.state = {email: "", password: "", firstName: "", lastName: ""};
      }

    onSend(){
      event.preventDefault();
      fetch(properties.host + 
        "/registration?userid=" + this.state.email + 
        "&password=" + this.state.password + 
        "&firstName=" + this.state.firstName + 
        "&lastName=" + this.state.lastName,{
        method: 'POST',
        credentials: "include",
        mode: "cors"
      }).then(res => res.json).then((response)=>console.log(response))
      .then(()=>
      {
        window.location.href = "/instructor";
      })
    }
    onFirstNameChangeclassName(event){
      this.setState({firstName: event.target.value})
    }
    onLastNameChangeclassName(event){
      this.setState({lastName: event.target.value})
    }

    onEmailChangeclassName(event){
      this.setState({email: event.target.value})
    }

    onPasswordChangeclassName(event){
      this.setState({password: event.target.value})
    }



    render() {
        return (
          <div className = 'signup-form-wrapper'>
            <div className = 'signup-form'>
              <form>
                <div className = 'half'>
                <div className = 'half-input'>
                  <label className = 'signup-label'>First Name</label>
                  <input onChange = {this.onFirstNameChangeclassName.bind(this)} className= 'signup-input' type = 'text'></input>
                </div>
                <div className = 'half-input'>
                  <label className = 'signup-label'>Last Name</label>
                  <input onChange = {this.onLastNameChangeclassName.bind(this)} className = 'signup-input' type = 'text'></input>
                </div>
                </div>
                <div>
                  <label className = 'signup-label'>Email </label>
                  <input onChange = {this.onEmailChangeclassName.bind(this)} className = 'signup-input' type = 'text'></input>
                </div>
                <div>
                  <label className= 'signup-label'>Password</label>
                  <input onChange = {this.onPasswordChangeclassName.bind(this)} className = 'signup-input' type = 'password'></input>
                </div>
                <button onClick = {this.onSend.bind(this)}>Submit</button>
              </form>
            </div>
          </div>  
        )
      }
}

export default Signupbox