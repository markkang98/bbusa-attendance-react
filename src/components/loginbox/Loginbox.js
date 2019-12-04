import React from 'react'
import './Loginbox.css'


class Loginbox extends React.Component{
    render(){
        return(
            <div className = 'signup-form-wrapper'>
            <div className = 'signup-form'>
              <form>
                <div>
                  <label className = 'signup-label'>Email </label>
                  <input className = 'signup-input' type = 'text'></input>
                </div>
                <div>
                  <label className= 'signup-label'>Password</label>
                  <input className = 'signup-input' type = 'password'></input>
                </div>
                <div>
                <label className= 'signup-label'>Log In As</label>
                <select className = 'signup-input'>
                            <option>Instructor</option>
                            <option>Student</option>
                            <option>Parent</option>
                        </select>
                </div>
                <button>Submit</button>
              </form>
            </div>
          </div>  
        )
    }
}
export default Loginbox