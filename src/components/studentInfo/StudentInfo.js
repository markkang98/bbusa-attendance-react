import React from 'react'
import { properties } from 'components/properties.js';
import './StudentInfo.css'

class StudentInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {SID: "", attendanceType: "attended"}
    }

    submitAttendance(){
        console.log(this.state.SID)
        console.log(this.props.CID)
        var endpoint = "/submitAttendance?SID=" + this.state.SID + 
        "&CID=" + this.props.CID + 
        "&attendance_type=" + this.state.attendanceType;
        fetch( properties.host + endpoint,{
            method: 'PUT',
            credentials: "include",
            mode: "cors"
        }).then(res=>res.json()).then((response) => {
            alert(this.props.name + "'s" + "attendance was recorded successfully!")
        })
    }
    viewAttendance(){
        var SID = this.state.SID
        var CID = this.props.CID
        window.location.href = "/attendance?CID=" + CID +"&SID=" + SID + "&link=/instructorProfile"
    }

    componentDidMount(){
        var endpoint = "/student/getStudentProfile?student_email=" + this.props.email;
        fetch( properties.host + endpoint,{
            method: 'GET',
            credentials: "include",
            mode: "cors"
        }).then(res=>res.json()).then((response) => {
            console.log(response)
            this.setState({SID: response[0].sid})
        })
    }

    attendanceTypeChange(event){
        this.setState({attendanceType: event.target.value})
    }
    render(){
        return(
            <div className = "student-element">
                <h1>{this.props.name}</h1>
                <h3>{this.props.email}</h3>
                <div className = "attendance-element">
                    <select onChange = {this.attendanceTypeChange.bind(this)}>
                        <option>attended</option>
                        <option>excused</option>
                        <option>absent</option>
                    </select>
                    <button onClick = {this.submitAttendance.bind(this)}>Submit Attendance</button>
                </div>
                <div className = "attendance-element">
                    <button onClick = {this.viewAttendance.bind(this)}>View Attendance</button>
                </div>
            </div>
        )
    }
}

export default StudentInfo