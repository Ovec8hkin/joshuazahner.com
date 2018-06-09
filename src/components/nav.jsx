import React from 'react'
import "../css/nav.css"
import { Link } from "react-router-dom";

class Nav extends React.Component{

    render(){
        return(

            <section id={"nav"}>
                <div className={"nav-item"}>
                    <Link to={"/about"}>About</Link>
                </div>
                <div className={"nav-item"}>
                    <a>Projects</a>
                </div>
                <div className={"nav-item"}>
                    <a>Skills</a>
                </div>
                <div className={"nav-item"}>
                    <a>Contact</a>
                </div>
                <div className={"nav-item"}>
                    <a>Blog</a>
                </div>

            </section>

        );
    }

}

export default Nav;