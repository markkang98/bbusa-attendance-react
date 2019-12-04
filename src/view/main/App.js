import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from '../login/login'
import Signup from '../signup/signup'
import Home from '../home/home'
import Instructor from '../instructor/Instructor'
class App extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path= '/' component= {Home}/>
                <Route path = '/login' component = {Login}/>
                <Route path = '/signup' component = {Signup}/>
                <Route path = '/instructor' component = {Instructor}/>
            </Router>
        )
    }
}
export default App