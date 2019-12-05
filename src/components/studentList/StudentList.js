import React from 'react'
import './StudentList.css'
import { properties } from 'components/properties.js';

class StudentList extends React.Component{
    constructor(props){
        super(props)
        this.state = {studentList: this.props.studentList}
    }

    render(){
        return(
            <h1>Hello</h1>
        )
    }

}

export default StudentList