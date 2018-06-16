import React from 'react'
import {Link} from "react-router-dom"

class LinkButton extends React.Component{

    render(){

        return(

            <Link to={this.props.link} className={"button" + (this.props.center ? " btn-center" : "") + (this.props.small ? " btn-small" : "")}>{this.props.name}</Link>

        )

    }

}

export default LinkButton;