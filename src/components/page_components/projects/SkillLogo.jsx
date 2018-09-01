import {Component} from "react";
import React from "react";
import '../../../css/skill-logo.css'

class SkillLogo extends Component {

    render() {
        return (
            <img src={require(`../../../images/skills-technologies/${this.props.img}.png`)}/>
        )
    }
}

export default SkillLogo