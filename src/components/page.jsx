
import React from 'react'
import "../css/nav.css"
import { BrowserRouter as Router, Route} from "react-router-dom";
import About from "./about";
import Home from "./home";
import Header from "./header";
import Nav from "./nav";

class Page extends React.Component{

    render(){
        return(
            <Router>

                <div>

                    <Header />

                    <section className={"container"}>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                    </section>


                </div>

            </Router>
        );
    }

}

export default Page;