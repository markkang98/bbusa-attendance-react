import React from 'react'
import './RegisterBox.css'
import { properties } from 'components/properties.js';
class Class extends React.Component{
    constructor(props){
        super(props)
        this.state = {studentlist: []}
    }

    register(){

    }

    render(){
        const styles = {
            container: {
                "gridColumnStart": this.props.column,
                "gridColumnEnd": this.props.column + 1,
            }
        }
             
        return(
            <div className = "class-wrapper" style = {styles.container}>
                <div className = "title-wrapper">
                    <label className = "title">{this.props.title}</label>
                </div>
                <h2>{"Age Range: " + this.props.startAge + "~" + this.props.olderAge}</h2>
                <h2>{"Time : " + this.props.startTime + "~" + this.props.endTime}</h2>

            <button onClick={this.register.bind(this)}> Register! </button>
        </div>
        )
    }
}

export default Class