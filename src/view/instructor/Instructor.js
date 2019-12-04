import React from 'react';
import './Instructor.css'
import Header from 'components/header/Header'
import Class from 'components/class/Class'
import { properties } from 'components/properties.js';

class Instructor extends React.Component{

    constructor(props){
        super(props)
        this.state = {classes: []}
    }
    componentDidMount(){
        fetch(properties.host + 
            "/instructorClasses?instructor=notaprguy@att.net",{
            method: 'GET',
            credentials: "include",
            mode: "cors"
        }).then(res => res.json()).then((response) => {
            var column = 1;
            var row = 1;
            var uniqueKey = 1;
            var temp = [];
            for(var i = 0; i < response.length; i ++){
                var classJson = response[i]
                var classTitle = classJson.description
                var classStartAge = classJson.target_start_age
                var classOlderAge = classJson.target_older_age
                var startTime = classJson.start_date
                var endTime = classJson.end_date
                var classObject = <Class key = {uniqueKey}
                                         title = {classTitle}
                                         startAge = {classStartAge}
                                         olderAge = {classOlderAge}
                                         startTime = {startTime}
                                         endTime = {endTime}
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
            var classObject = <button key = {uniqueKey} className = "new-button">Add New Class</button>
            temp.push(classObject)
            this.setState({classes: temp})
        }
        )
    }

    render(){
        return(
            <div>
                <Header loginStatus = {true}/>
                <div className = "class-elements">
                    {this.state.classes}
                </div>
                
            </div>
        )
    }
}

export default Instructor