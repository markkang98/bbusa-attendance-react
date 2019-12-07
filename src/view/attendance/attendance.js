import React from 'react'
import { properties } from 'components/properties.js';
import Header from 'components/header/Header'
import './attendance.css'
import queryString from 'query-string'
import {Calendar, CalendarControls} from 'react-yearly-calendar';

class Attendance extends React.Component{
    constructor(props){
        super(props)
        this.state = {account: "", currentYear: 2019, attendance_dates: null, attended: [], absent: [], excused: []}
    }

    componentDidMount(){
        const values = queryString.parse(this.props.location.search)
        var CID = values.CID
        var SID = values.SID 
        var account = values.link
        this.setState({account: account})
        var endpoint = "/attendance/getAttendance?SID=" + SID + 
        "&CID=" + CID;
        fetch( properties.host + endpoint,{
            method: 'GET',
            credentials: "include",
            mode: "cors"
        }).then(res=>res.json()).then((response) => {
            console.log(response)
            var i;
            var datesAttended = [];
            var datesExcused = [];
            var datesAbsent = [];
            for(i = 0; i < response.length; i ++){
            var date = response[i].attendDate;
            var type = response[i].attendance;
             
            if(type === "attended"){
                datesAttended.push(date)
            }else if (type === "excused"){
                datesExcused.push(date)
            }else if( type === "absent"){
                datesAbsent.push(date)
            }
            }
            var attended = {attended: datesAttended}
            this.setState({attendance_dates: attended, attended: datesAttended, absent: datesAbsent, excused: datesExcused})
            })
        
    }
    prevYear(){
        this.setState({currentYear: this.state.currentYear - 1})
      }
    nextYear(){
    this.setState({currentYear: this.state.currentYear + 1})
    }

    attendChange(event){
        console.log(event.target.value)
        var type = event.target.value
        if(type === "Attended"){
            var attended = {attended: this.state.attended}
            this.setState({attendance_dates: attended})
        }else if (type === "Excused"){
            var excused = {excused: this.state.excused}
            this.setState({attendance_dates: excused})
        }else if( type === "Absent"){
            var absent = {excused: this.state.absent}
            this.setState({attendance_dates: absent})
        }
    }

    render(){
        return(
            <div>
            <Header profileLink = {this.state.account} loginStatus = {true} ></Header>
            <div className = "calender-wrapper">
            <select onChange = {this.attendChange.bind(this)}>
                <option>Attended</option>
                <option>Excused</option>
                <option>Absent</option>
            </select>
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