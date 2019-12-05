import React from 'react';
import './Student.css'
import Header from 'components/header/Header'
import StudentClass from 'components/studentClass/StudentClass'
import { properties } from 'components/properties.js';

class Student extends React.Component{

    constructor(props){
        super(props)
        this.state = {classes: [], currentUser: ""}
    }
    componentDidMount(){
        var endpoint = "/authentication/getCurrentUser";
        fetch( properties.host + endpoint,{
            method: 'GET',
            credentials: "include",
            mode: "cors"
        }).then(res=>res.text()).then((response) => {
            if(response.length !== 0){
                this.setState({currentUser: response})
                console.log(response)
                this.getListOfClasses()
            }else{
                window.location.href = "/";
            }
        })
    }
    signUpClass(){
        window.location.href = "/register";
    }
    getListOfClasses(){
        fetch(properties.host + 
            "/student/getClassList?student_email=" + this.state.currentUser,{
            method: 'GET',
            credentials: "include",
            mode: "cors"
        }).then(res => res.json()).then((response) => {
            var column = 1;
            var row = 1;
            var uniqueKey = 1;
            var temp = [];
            console.log(response)
            for(var i = 0; i < response.length; i ++){
                var SID = response[i].sid
                var classEntity = response[i].classesEntity
                var instructorEntity = response[i].instructorEntities[0]
                var instructorFirstName = response[i].instructor_firstName
                var instructorLastName = response[i].instructor_lastName
                var classObject = <StudentClass key = {uniqueKey}
                                        classEntity = {classEntity}
                                        instructor = {instructorFirstName + " " + instructorLastName}
                                        instructorEntity = {instructorEntity}
                                        SID = {SID}
                                         row = {row}
                                         column = {column}
                                />
                temp.push(classObject)
                if(column == 3){
                    column= 1;
                    row ++;
                }else{
                    column ++;
                }
                uniqueKey ++;
            }
            var classObject = <button key = {uniqueKey} onClick = {this.signUpClass.bind(this)}className = "new-button" >Register!</button>
            temp.push(classObject)
            this.setState({classes: temp})
        }
        )
    }
    render(){
        return(
            <div>
                <Header profileLink = {"/studentProfile"} loginStatus = {true}/>
                <div className = "class-elements">
                    {this.state.classes}
                </div>
            </div>
        )
    }
}

export default Student