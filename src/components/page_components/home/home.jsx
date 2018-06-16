import React from 'react';
import '../../../css/header.css';
import AboutBlurb from "./about_blurb";
import ProjectDescription from "../projects/ProjectDescription";


class Home extends React.Component{

    render(){

        return (

            <section className={"container"}>
                <AboutBlurb />

                <section id={"projects"} style={{marginTop: "5em"}}>
                    <div className={"col-md-4"}>
                        <ProjectDescription />
                    </div>
                    <div className={"col-md-4"}>
                        <ProjectDescription />
                    </div>
                    <div className={"col-md-4"}>
                        <ProjectDescription />
                    </div>
                </section>

            </section>

        );

    }

}

export default Home;