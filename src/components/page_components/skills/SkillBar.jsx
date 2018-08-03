import React from "react"
import "../../../css/skills.css"

class SkillBar extends React.Component{

    render(){

        return (

            <article className={"skillbar"}>

                <h3>{this.props.name}</h3>
                <progress value={this.props.value} max={"100"}>{this.props.value}%</progress>
                <p>{this.props.years} Years</p>
                <p>|</p>
                <p>{this.props.projects} Projects </p>
                <button className={"fa fa-chevron-down"}></button>

            </article>

        );

    }

}

export default SkillBar;