import React from 'react';
import './Instructor.css'
import Header from 'components/header/Header'
import Class from 'components/class/Class'
import { properties } from 'components/properties.js';

class Instructor extends React.Component{

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
                this.getListOfClasses()
            }else{
                window.location.href = "/";
            }
        })
    }
    getListOfClasses(){
        fetch(properties.host + 
            "/instructorClasses?instructor=" + this.state.currentUser,{
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
                var CID = classJson.cid
                console.log(CID)
                var classObject = <Class key = {uniqueKey}
                                         title = {classTitle}
                                         startAge = {classStartAge}
                                         olderAge = {classOlderAge}
                                         startTime = {startTime}
                                         endTime = {endTime}
                                         row = {row}
                                         column = {column}
                                         id = {CID}
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
            var classObject = <button key = {uniqueKey} className = "new-button" onClick = {this.newClass.bind(this)}>Add New Class</button>
            var requests = <button key = {uniqueKey + 1} className = "new-button" onClick = {this.requests.bind(this)}>View Requests</button>
            temp.push(classObject)
            temp.push(requests)
            this.setState({classes: temp})
        }
        )
    }
    newClass(){
        event.preventDefault();
        window.location.href = '/createNewClass'
    }

    requests(){
        event.preventDefault();
        window.location.href = '/requestList'
    }
    render(){
        return(
            <div>
                <Header profileLink = {"/instructorProfile"} loginStatus = {true}/>
                <div className = "class-elements">
                    {this.state.classes}
                </div>
                
            </div>
        )
    }
}

export default Instructor