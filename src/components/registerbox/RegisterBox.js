import React from 'react'
import './RegisterBox.css'
import { properties } from 'components/properties.js';
class Class extends React.Component{
    constructor(props){
        super(props)
        this.state = {studentlist: [], registered: false}
    }

    register(){
        event.preventDefault()
        var endpoint = "/registerClass?CID=" + this.props.CID + 
        "&SID=" + this.props.SID;
        fetch( properties.host + endpoint,{
            method: 'PUT',
            credentials: "include",
            mode: "cors"
        }).then(res=>res.status).then((response) => {
            if(response == 200){
                this.setState({registered: true})
            }else{

            }
        })
    }

    render(){
        const styles = {
            container: {
                "gridColumnStart": this.props.column,
                "gridColumnEnd": this.props.column + 1,
            }
        }
        var btn;
        if(this.state.registered){
            btn = <h4>Waiting Approval ... </h4>
        }else{
            btn = <button onClick={this.register.bind(this)}> Register! </button>
        }
        return(
            <div className = "register-class-wrapper" style = {styles.container}>
                <div className = "register-title-wrapper">
                    <label className = "register-title">{this.props.description}</label>
                </div>
                <h3>{"Instructor: " + this.props.firstName + " " + this.props.lastName}</h3>
                <h3>{"Belt: " + this.props.belt + ", Email: " + this.props.email}</h3>
                <h3>{"Time: " + this.props.time}</h3>
                <h3>{"Age Range: " + this.props.ageRange}</h3>
            {btn}
        </div>
        )
    }
}

export default Class