import React from 'react';
import './newClass.css'
import Header from 'components/header/Header'
import NewClassBox from 'components/newclassbox/NewClassBox'

class NewClass extends React.Component{
    render(){
        return(
            <div>
                <Header loginStatus = {true} profileLink= {"/instructorProfile"}></Header>
                <NewClassBox></NewClassBox>
            </div>
            
        )
    }
}

export default NewClass