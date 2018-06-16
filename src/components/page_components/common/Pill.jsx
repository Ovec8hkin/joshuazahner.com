import React from 'react'
import "../../../css/pill.css"

class Pill extends React.Component{

    render(){

        return(

            <span className={"pill"}>{this.props.text}</span>

        )

    }

}

export default Pill;