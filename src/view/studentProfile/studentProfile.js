import React from 'react';
import './studentProfile.css'
import Header from 'components/header/Header'
import { properties } from 'components/properties.js';

class StudentProfile extends React.Component{
    constructor(props){
        super(props)
        this.state = {email: "", firstName: "", lastName: "", belt: "", age: "", emergencyContactName: "", emergencyContactNumber: ""}
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
            var endpoint = "/student/getStudentProfile?student_email=" + this.state.email;
            fetch( properties.host + endpoint,{
                method: 'GET',
                credentials: "include",
                mode: "cors"
            }).then(res=>res.json()).then((response) => {
                var student = response
                console.log(student)
                this.setState({email: student.studentEntity.student_email, belt: student.studentEntity.belt, 
                                firstName: student.first_name, lastName: student.last_name, 
                                age: student.studentEntity.age, emergencyContactName: student.studentEntity.emergency_contact_name,
                                emergencyContactNumber: student.studentEntity.emergency_contact_number
                })
            })
        }
            
        )
    }

    editInfo(){
        event.preventDefault()
        var currentEndpoint = "/student/updateStudentProfile";
        fetch( properties.host + currentEndpoint + 
            "?student_email=" + this.state.email + 
            "&belt=" + this.state.belt +  
            "&first_name=" + this.state.firstName + 
            "&last_name=" + this.state.lastName +
            "&age=" + this.state.age +
            "&emergencyContactName=" + this.state.emergencyContactName +
            "&emergencyContactNumber=" + this.state.emergencyContactNumber,{
            method: 'PUT',
            credentials: "include",
            mode: "cors"
        }).then(res=>res.status).then((response)=>{
            window.location.href = "/studentProfile";
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
    ageChange(event){
        this.setState({age: event.target.value})
    }
    emergencyContactNameChange(event){
        this.setState({emergencyContactName: event.target.value})
    }
    emergencyContactNumberChange(event){
        this.setState({emergencyContactNumber: event.target.value})
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
                <div>
                  <label className = 'signup-label'>Age</label>
                  <input onChange = {this.ageChange.bind(this)}type = "text" value = {this.state.belt} className = 'signup-input'></input>
                </div>
                <div>
                  <label className = 'signup-label'>Emergency Contact Name</label>
                  <input onChange = {this.emergencyContactNameChange.bind(this)}type = "text" value = {this.state.emergencyContactName} className = 'signup-input'></input>
                </div>
                <div>
                  <label className = 'signup-label'>Emergency Contact Number</label>
                  <input onChange = {this.emergencyContactNumberChange.bind(this)}type = "text" value = {this.state.emergencyContactNumber} className = 'signup-input'></input>
                </div>
                <button onClick = {this.editInfo.bind(this)}>Edit</button>
            </div>
          </div>  
          </div>
        )
    }
}

export default StudentProfile