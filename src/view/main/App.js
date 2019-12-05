import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from '../login/login'
import Signup from '../signup/signup'
import Home from '../home/home'
import Instructor from '../instructor/Instructor'
import Student from '../student/Student'
import Logout from '../logout/logout'
import NewClass from '../newClass/newClass'
import InstructorProfile from "../instructorProfile/instructorProfile"
import StudentProfile from '../studentProfile/studentProfile'
import StudentList from '../studentList/studentList'
import Register from '../register/register'
import Request from '../request/request'
import Attendance from '../attendance/attendance'
class App extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path= '/' component= {Home}/>
                <Route path = '/login' component = {Login}/>
                <Route path = '/signup' component = {Signup}/>
                <Route path = '/instructor' component = {Instructor}/>
                <Route path = '/student' component = {Student}/>
                <Route path = '/logout' component = {Logout}/>
                <Route path = '/createNewClass' component = {NewClass}/>
                <Route path = '/instructorProfile' component = {InstructorProfile}/>
                <Route path = '/studentProfile' component = {StudentProfile}/>
                <Route path = '/register' component = {Register}/>
                <Route path = '/requestList' component = {Request}/>
                <Route path = '/studentList' component = {StudentList}/>
                <Route path = '/attendance' component = {Attendance}/>
            </Router>
        )
    }
}
export default App