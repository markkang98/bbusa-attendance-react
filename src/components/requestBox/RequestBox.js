import React from 'react';
import './RequestBox.css'
import { properties } from 'components/properties.js';

class RequestBox extends React.Component{

    constructor(props){
        super(props)
    }

    grantAccess(){
        var endpoint = "/grantRequests?CID=" + this.props.CID + 
        "&SID=" + this.props.SID;
        fetch( properties.host + endpoint,{
            method: 'PUT',
            credentials: "include",
            mode: "cors"
        }).then(res=>res.status).then((response) => {
            if(response == 200){
                window.location.href = "/requestList";
            }
        })
    }
    render(){
        return(
            <div className = "request-wrapper">
                <h1>{"Your student '" + this.props.studentName + "'"}</h1>
                <h2>{"has requested to take the class '" + this.props.title + "'"}</h2>
                    <h2>{"Class Details: "}</h2>
                    <h3>{"Age Range: " + this.props.ageRange}</h3>
                    <h3>{"Time Range: " + this.props.timeRange}</h3>
                    <button onClick = {this.grantAccess.bind(this)}>Grant Access?</button>
            </div>
        )
    }
}

export default RequestBox