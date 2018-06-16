import React from 'react'
import "../../../css/project_description.css"
import GGB from '../../../images/san-fran.jpg'
import Pill from "../common/Pill";
import LinkButton from "../common/LinkButton"

class ProjectDescription extends React.Component{

    render(){

        return(

            <article className={"project-description"}>
                <img src={GGB} className={"header-image"}/>
                <h2>UM Scientifica Website</h2>
                <Pill text={"Website"} />
                <Pill text={"Student"} />
                <p style={{padding: "2em"}}>Morbi at viverra velit. Mauris et volutpat dui. Etiam sit amet ligula facilisis, convallis leo vel, elementum mi. Donec pretium arcu id quam rhoncus pulvinar. In faucibus lacus a accumsan elementum. Nulla sit amet leo sed elit faucibus cursus quis at magna. Vivamus sed condimentum massa, rutrum sollicitudin nunc.</p>

                <LinkButton link={"/about"} name={"More Info"} center/>

            </article>

        )

    }

}

export default ProjectDescription;