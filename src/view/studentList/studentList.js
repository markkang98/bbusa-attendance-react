import React from 'react'
import './studentList.css'
import Header from 'components/header/Header'
import { properties } from 'components/properties.js';
import queryString from 'query-string'
import StudentInfo from 'components/studentInfo/StudentInfo'

class StudentList extends React.Component{
    constructor(props){
        super(props)
        this.state = {studentList: []}
    }

    componentDidMount(){
        const values = queryString.parse(this.props.location.search)
        var endpoint = "/getlistOfStudentsForClass?CID=" + values.CID;
        fetch( properties.host + endpoint,{
            method: 'GET',
            credentials: "include",
            mode: "cors"
        }).then(res=>res.json()).then((response) => {
            console.log(response)
            var temp = []
            for(var i = 0; i < response.length; i ++){
                var currentResponse = response[i]
                var email = currentResponse.email
                var name = currentResponse.first_name + " " + currentResponse.last_name
                var studentInfoObject = <StudentInfo 
                                        key = {i}
                                        email = {email}
                                        name = {name}
                                        CID = {values.CID}
                                        />
                temp.push(studentInfoObject)
            }
            this.setState({studentList: temp})
        })
    }
    render(){
        return(
            <div>
                <Header loginStatus = {true} profileLink = "/instructorProfile"/>
                <div className = "student-list">
                    {this.state.studentList}
                </div>
            </div>
        )
    }

}

export default StudentList