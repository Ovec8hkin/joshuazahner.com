import React from 'react';
import '../../../css/header.css';
import AboutBlurb from "./about_blurb";
import ProjectDescription from "../projects/ProjectDescription";
import BlogPostShort from "../blog/BlogPostShort";


class Home extends React.Component{

    render(){

        return (

            <section className={"container"}>
                <AboutBlurb showButton={true} backwards={false}/>

                <section id={"projects"} style={{marginTop: "0.5em"}}>
                    <ProjectDescription />
                    <ProjectDescription />
                    <ProjectDescription />
                </section>

                <section id={"posts"} style={{marginTop: "5em"}}>
                    <div className={"row"}>
                        <div className={"col-md-6 col-sm-6 col-xs-12"}>
                            <BlogPostShort />
                        </div>
                        <div className={"col-md-6 col-sm-6 col-xs-12"}>
                            <BlogPostShort />
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-md-6 col-sm-6 col-xs-12"}>
                            <BlogPostShort />
                        </div>
                        <div className={"col-md-6 col-sm-6 col-xs-12"}>
                            <BlogPostShort />
                        </div>
                    </div>
                </section>

            </section>

        );

    }

}

export default Home;