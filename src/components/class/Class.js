import React from 'react'
import './Class.css'
import { properties } from 'components/properties.js';
import StudentList from 'components/studentList/StudentList'
class Class extends React.Component{
    constructor(props){
        super(props)
        this.state = {studentlist: []}
    }
    getStudentsList(){
        var endpoint = "/getlistOfStudentsForClass?CID=" + "1";
        fetch( properties.host + endpoint,{
            method: 'GET',
            credentials: "include",
            mode: "cors"
        }).then(res=>res.json()).then((response) => {
            var temp = this.state.studentlist;
            var list = <StudentList studentList = {response}/>
            temp.push(list)
            console.log(response)
            this.setState({studentList: temp})
        })
    }
    render(){
        const styles = {
            container: {
                "gridColumnStart": this.props.column,
                "gridColumnEnd": this.props.column + 1,
            }
        }
             
        return(
            <div className = "class-wrapper" style = {styles.container}>
                <div className = "title-wrapper">
                    <label className = "title">{this.props.title}</label>
                </div>
                <h2>{"Age Range: " + this.props.startAge + "~" + this.props.olderAge}</h2>
                <h2>{"Time : " + this.props.startTime + "~" + this.props.endTime}</h2>
            <button onClick={this.getStudentsList.bind(this)}>Check Roster</button>
            {this.state.studentlist}
        </div>
        )
    }
}

export default Class
