
import React from 'react';
import './request.css'
import { properties } from 'components/properties.js';
import Header from 'components/header/Header'
import RequestBox from 'components/requestBox/RequestBox'
class Request extends React.Component{
    constructor(props){
        super(props)
        this.state = {currentUser: "", requestList: []}
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
                this.getListOfRequests()
            }else{
                window.location.href = "/";
            }
        })
    }
    getListOfRequests(){
            var endpoint = "/getClassRequests?instructor=" + this.state.currentUser;
            fetch( properties.host + endpoint,{
                method: 'GET',
                credentials: "include",
                mode: "cors"
            }).then(res=>res.json()).then((response) => {
                console.log(response)
                var temp = []
                for(var i = 0; i < response.length; i ++){
                    var studentName = response[i].studentFirstName + " " + response[i].studentLastName
                    var title = response[i].description
                    var CID = response[i].cid 
                    var SID = response[i].sid 
                    var ageRange = response[i].startAge + "~" + response[i].olderAge
                    var timeRange = response[i].startTime + "~" + response[i].endTime
                    var requestBox = <RequestBox
                                    key = {i}
                                    SID = {SID}
                                    CID = {CID}
                                    title = {title}
                                    studentName = {studentName}
                                    ageRange = {ageRange}
                                    timeRange = {timeRange}
                    />
                    temp.push(requestBox)
                }
                this.setState({requestList: temp})
                
            })
    }

    render(){
        return(
            <div>
            <Header loginStatus = {true} profileLink = "/instructorProfile"></Header>
                <div className = "request-element">
                    {this.state.requestList}
                </div>
            </div>
        )
    }
}

export default Request