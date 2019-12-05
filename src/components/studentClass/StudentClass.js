import React from 'react'
import './StudentClass.css'
import { properties } from 'components/properties.js';
import StudentList from 'components/studentList/StudentList'

class StudentClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {studentlist: []}
    }
    render(){
        const styles = {
            container: {
                "gridColumnStart": this.props.column,
                "gridColumnEnd": this.props.column + 1,
            }
        }
             
        return(
            <div className = "student-class-wrapper" style = {styles.container}>
                <div className = "student-title-wrapper">
                    <label className = "student-title">{this.props.classEntity.description}</label>
                </div>
                <h2 className = "description">{"Time : " + this.props.classEntity.start_date + "~" + this.props.classEntity.end_date}</h2>
                <h2 className = "description">{"Instructor: " + this.props.instructor}</h2>
                <h2 className = "description">{"Instructor Email: " + this.props.instructorEntity.instructorEmail}</h2>
            <button>Check Roster</button>
            {this.state.studentlist}
        </div>
        )
    }
}

export default StudentClass