import React from 'react'
import { properties } from 'components/properties.js';
import Header from 'components/header/Header'
import './attendance.css'
import queryString from 'query-string'
import {Calendar, CalendarControls} from 'react-yearly-calendar';

class Attendance extends React.Component{
    constructor(props){
        super(props)
        this.state = {currentYear: 2019, attendance_dates: null}
    }

    componentDidMount(){
        const values = queryString.parse(this.props.location.search)
        var CID = values.CID
        var SID = values.SID
        var endpoint = "/attendance/getAttendance?SID=" + SID + 
        "&CID=" + CID;
        fetch( properties.host + endpoint,{
            method: 'GET',
            credentials: "include",
            mode: "cors"
        }).then(res=>res.json()).then((response) => {
            console.log(response)
            var i;
            var dates = [];
            for(i = 0; i < response.length; i ++){
            var date = response[i].attendDate;
            dates.push(date);
            }
            var attended = {attended: dates}
            this.setState({attendance_dates: attended})
            })
        
    }
    prevYear(){
        this.setState({currentYear: this.state.currentYear - 1})
      }
    nextYear(){
    this.setState({currentYear: this.state.currentYear + 1})
    }

    render(){
        return(
            <div>
            <Header profileLink = {'/'} loginStatus = {true} ></Header>
            <div className = "calender-wrapper">
            <CalendarControls 
                year = {this.state.currentYear} 
                onPrevYear = {this.prevYear.bind(this)} 
                onNextYear={this.nextYear.bind(this)}
                />
                <Calendar
                year={this.state.currentYear}
                showWeekSeparators = {true}
                customClasses =  {this.state.attendance_dates}
            />
            </div>
          </div>
        )
    }
}

export default Attendance