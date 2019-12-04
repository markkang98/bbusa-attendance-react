import React from 'react'
import './NewClassBox.css'
import { properties } from 'components/properties.js';

class NewClassBox extends React.Component{
    constructor(props){
        super(props)
        this.state = {title: "", startTime :  "", endTime :  "", lowerAge : 0, olderAge :  0, currentUser: ""}
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
            }
        })
    }
    
    onSubmit(){
        console.log(this.state.startTime)
        event.preventDefault();
        fetch(properties.host + 
          "/addNewClass?description=" + this.state.title + 
          "&start_age=" + this.state.lowerAge + 
          "&old_age=" + this.state.olderAge + 
          "&start_time=" + this.state.startTime +
          "&end_time=" + this.state.endTime +
          "&instructor=" + this.state.currentUser,{
          method: 'PUT',
          credentials: "include",
          mode: "cors"
        }).then(window.location.href = "/")
    }

    onTitleChange(event){
        this.setState({title: event.target.value})
    }
    onStartTimeChange(event){
        this.setState({startTime: event.target.value})
    }
    onEndTimeChange(event){
        this.setState({endTime: event.target.value})
    }
    onLowerAgeChange(event){
        this.setState({lowerAge: event.target.value})
    }
    onOlderAgeChange(event){
        this.setState({olderAge: event.target.value})
    }
    render(){
        return(
                <div className = 'signup-form-wrapper'>
                  <div className = 'signup-form'>
                    <form>
                    <div>
                        <label className = 'signup-label'>Class Title</label>
                        <input onChange = {this.onTitleChange.bind(this)}  className = 'signup-input' type = 'text'></input>
                      </div>
                      <div className = 'half'>
                      <div className = 'half-input'>
                        <label className = 'signup-label'>Lower Age Range</label>
                        <input onChange = {this.onLowerAgeChange.bind(this)} className = 'signup-input' type = 'number'></input>
                      </div>
                      <div className = 'half-input'>
                        <label className = 'signup-label'>Upper Age Range</label>
                        <input onChange = {this.onOlderAgeChange.bind(this)}className= 'signup-input' type = 'number'></input>
                      </div>
                      </div>
                      <div>
                        <label className= 'signup-label'>Starting Time</label>
                        <input onChange = {this.onStartTimeChange.bind(this)} className = 'signup-input' type = 'time'></input>
                      </div>
                      <div>
                        <label className= 'signup-label'>Ending Time</label>
                        <input onChange = {this.onEndTimeChange.bind(this)} className = 'signup-input' type = 'time'></input>
                      </div>
                      <button onClick = {this.onSubmit.bind(this)}>Submit</button>
                    </form>
                  </div>
                </div>  
        )
    }
}

export default NewClassBox