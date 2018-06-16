import React from 'react'
import "../../css/nav.css"
import { BrowserRouter as Router, Route} from "react-router-dom";
import About from "./about/about";
import Home from "./home/home";
import Header from "../header";
import Projects from "./projects/projects";
import Contact from "./contact/contact";
import Blog from "./blog/blog";

class Page extends React.Component{

    render(){
        return(
            <Router>

                <div>

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

                        <Route path="/contact" render={() => {
                            return <Contact />
                        }}/>

                        <Route path="/blog" render={() => {
                            return <Blog />
                        }}/>

                    </section>


                </div>

            </Router>
        );
    }

}

export default Page;