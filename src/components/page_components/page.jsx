import React from 'react'
import "../../css/nav.css"
import { BrowserRouter as Router, Route} from "react-router-dom";
import About from "./about/about";
import Home from "./home/home";
import Header from "../header";
import Projects from "./projects/projects";
import Contact from "./contact/contact";
import Blog from "./blog/blog";
import Skills from "./skills/skills";
import Project from "./projects/project";

class Page extends React.Component{

    render(){
        return(
            <Router>

                <div>

                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
                          crossOrigin="anonymous" />

                    <Header />

                    <section className={"container-fluid"}>

                        <Route exact path="/" render={() => {
                            return <Home />
                        }} />

                        <Route path="/about" render={() => {
                            return <About />
                        }}/>

                        <Route path="/projects" render={() => {
                            return <Projects />
                        }}/>

                        <Route path="/skills" render={() => {
                            return <Skills />
                        }}/>

                        <Route path="/contact" render={() => {
                            return <Contact />
                        }}/>

                        <Route path="/blog" render={() => {
                            return <Blog />
                        }}/>

                        <Route path="/project" render={() => {
                            return <Project />
                        }}/>

                    </section>


                </div>

            </Router>
        );
    }

}

export default Page;