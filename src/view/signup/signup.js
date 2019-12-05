import React from 'react';
import './signup.css'
import Header from 'components/header/Header'
import Signupbox from 'components/signupbox/Signupbox'
import StudentSignup from 'components/studentSignup/StudentSignup'
class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state = {type: ""}
    }
    selectType(event){
        this.setState({type: event.target.value})
    }
    render(){
        var formSignup = <Signupbox></Signupbox>

        if(this.state.type == "Student"){
            formSignup = <StudentSignup></StudentSignup>
        }
        return(
            <div>
                <Header loginStatus = {false}></Header>
                <div className = "signup-choice">
                    <label>Sign up as  </label>
                    <select onChange = {this.selectType.bind(this)}>
                        <option>Instructor</option>
                        <option>Parent</option>
                        <option>Student</option>
                    </select>
                </div>
                {formSignup}
            </div>
            
        )
    }
}

export default Signup