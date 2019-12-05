import React from 'react';
import './instructorProfile.css'
import { properties } from 'components/properties.js';
import Header from 'components/header/Header'

class InstructorProfile extends React.Component{
    constructor(props){
        super(props)
        this.state = {email: "", newEmail:"", firstName: "", lastName: "", belt: ""}
    }

    componentDidMount(){

        var currentEndpoint = "/authentication/getCurrentUser";
        fetch( properties.host + currentEndpoint,{
            method: 'GET',
            credentials: "include",
            mode: "cors"
        }).then(res=>res.text()).then((response) => {
            this.setState({email: response})
        }).then((res) =>{
            var endpoint = "/getInstructorProfile?instructor=" + this.state.email;
            fetch( properties.host + endpoint,{
                method: 'GET',
                credentials: "include",
                mode: "cors"
            }).then(res=>res.json()).then((response) => {
                this.setState({newEmail: response.email, email: response.email, firstName: response.first_name, lastName: response.last_name, belt: response.belt})
            })
        }
            
        )
    }

    editInfo(){
        event.preventDefault()
        var currentEndpoint = "/updateInstructorProfile";
        fetch( properties.host + currentEndpoint + 
            "?instructor=" + this.state.newEmail + 
            "&belt=" + this.state.belt +  
            "&firstName=" + this.state.firstName + 
            "&lastName=" + this.state.lastName +
            "&originalInstructor=" + this.state.email ,{
            method: 'PUT',
            credentials: "include",
            mode: "cors"
        }).then(res=>res.status).then((response)=>{
            window.location.href = "/instructorProfile";
        })
    }

    emailChange(event){
        this.setState({newEmail: event.target.value})
    }
    firstNameChange(event){
        this.setState({firstName: event.target.value})
    }
    lastNameChange(event){
        this.setState({lastName: event.target.value})
    }
    beltChange(event){  
        this.setState({belt: event.taget.value})
    }
    render(){
        return(
            <div>
            <Header profileLink = "/instructorProfile" loginStatus = {true}></Header>
            <div className = 'signup-form-wrapper'>
            <div className = 'signup-form'>
                <div>
                  <label className = 'signup-label'>Email </label>
                 <input onChange = {this.emailChange.bind(this)}type = "text" value = {this.state.email} className = 'signup-input'></input>
                </div>
                <div>
                  <label className = 'signup-label'>First Name</label>
                  <input onChange = {this.firstNameChange.bind(this)}type = "text" value = {this.state.firstName} className = 'signup-input'></input>
                </div>
                <div>
                  <label className = 'signup-label'>Last Name</label>
                  <input onChange = {this.lastNameChange.bind(this)}type = "text" value = {this.state.lastName} className = 'signup-input'></input>
                </div>
                <div>
                  <label className = 'signup-label'>Belt</label>
                  <input onChange = {this.beltChange.bind(this)}type = "text" value = {this.state.belt} className = 'signup-input'></input>
                </div>
                <button onClick = {this.editInfo.bind(this)}>Edit</button>
            </div>
          </div>  
          </div>
        )
    }
}

export default InstructorProfile