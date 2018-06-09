import React from 'react'
import "../../css/nav.css"
import { BrowserRouter as Router, Route} from "react-router-dom";
import About from "./about";
import Home from "./home";
import Header from "../header";
import Projects from "./projects";
import Contact from "./contact";
import Blog from "./blog";

class Page extends React.Component{

    constructor(props){
        super(props)

        this.state = {active: 1000}

    }

    render(){
        return(
            <Router>

                <div>

                    <Header active={this.state.active}/>

                    <section className={"container"}>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/blog" component={Blog} />
                    </section>


                </div>

            </Router>
        );
    }

}

export default Page;