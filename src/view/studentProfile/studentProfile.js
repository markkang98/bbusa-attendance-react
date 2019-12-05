import React from 'react';
import Header from 'components/header/Header'

class StudentProfile extends React.Component{
    getStudentsList(){
        var endpoint = "/getlistOfStudentsForClass?CID=" + "1";
        fetch( properties.host + endpoint,{
            method: 'GET',
            credentials: "include",
            mode: "cors"
        }).then(res=>res.json()).then((response) => {
            const values = queryString.parse(this.props.location.search)
            
        })
    }
}

export default StudentProfile