import React from 'react';
import './Student.css'
import Header from 'components/header/Header'

class Student extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Header profileLink = {"/studentProfile"} loginStatus = {true}/>
                <h1>Student</h1>
            </div>
        )
    }
}

export default Student