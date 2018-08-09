import React from 'react';
import '../../../css/header.css';
import ProjectDescription from "./ProjectDescription";


class Projects extends React.Component{

    render(){

        return (

            <section className={"container"}>
                <h1>PROJECTS!!</h1>
                <div className={"row col-md-12"}>
                    <ProjectDescription />
                    <ProjectDescription />
                    <ProjectDescription />
                    <ProjectDescription />
                    <ProjectDescription />
                    <ProjectDescription />
                    <ProjectDescription />
                    <ProjectDescription />
                    <ProjectDescription />
                    <ProjectDescription />
                    <ProjectDescription />
                    <ProjectDescription />
                    <ProjectDescription />
                </div>
            </section>

        );

    }

}

export default Projects;