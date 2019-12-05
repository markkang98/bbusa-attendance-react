import React from 'react';
import Header from 'components/header/Header'
import { properties } from 'components/properties.js';
import './register.css'
import RegisterBox from 'components/registerbox/RegisterBox'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {classes: []}
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
                this.getAllClasses()
            }else{
                window.location.href = "/";
            }
        })
    }
    getAllClasses(){
        var endpoint = "/getAllClasses?student_email=" + this.state.currentUser;
        fetch( properties.host + endpoint,{
            method: 'GET',
            credentials: "include",
            mode: "cors"
        }).then(res=>res.json()).then((response) => {
            var column = 1;
            var row = 1;
            var uniqueKey = 1;
            var temp = this.state.classes
            for(var i = 0; i < response.length; i ++){
                var instructorEmail = response[i].email 
                var instructorFirstName = response[i].first_name
                var instructorLastName = response[i].last_name
                var belt = response[i].belt
                var startTime = response[i].start_time
                var endTime = response[i].end_time
                var startAge = response[i].target_start_age
                var olderAge = response[i].target_end_age
                var description = response[i].description
                var CID = response[i].cid
                var SID = response[i].sid
                var registerBox = <RegisterBox
                                    email = {instructorEmail}
                                    firstName = {instructorFirstName}
                                    lastName = {instructorLastName}
                                    belt = {belt}
                                    time = {startTime + "~" + endTime}
                                    ageRange = {startAge + "~" +olderAge}
                                    description = {description}     
                                    row = {row}
                                    SID = {SID}
                                    CID = {CID}
                                    column = {column}
                                    key = {uniqueKey}                
                />
                temp.push(registerBox)
                if(column == 3){
                    column= 1;
                    row ++;
                }else{
                    column ++;
                }
                uniqueKey ++;
            }

            this.setState({classes: temp})
        })
    }

    render(){
        return(
            <div>
                <Header profileLink = "/studentProfile" loginStatus= {true}></Header>
                <div className = "class-list">
                    {this.state.classes}
                </div>
            </div>
        )
    }
}

export default Register