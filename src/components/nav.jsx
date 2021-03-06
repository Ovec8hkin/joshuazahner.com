import React from 'react'
import "../css/nav.css"
import { Link } from "react-router-dom";

const menu_items = [
                    {id: "home", name: "Home", url: "/"},
                    {id: "about", name: "About", url: "/about"},
                    {id: "projects", name: "Projects", url: "/projects"},
                    {id: "skills", name: "Skills", url: "/skills"},
                    {id: "contact", name: "Contact", url: "/contact"},
                    {id: "blog", name: "Blog", url: "/blog"}
                   ];

class Nav extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            active: 'home',
        };

    }

    _handle_click(child){
        this.setState({
            active: child
        });
    }

    render(){

        const active_style = 'active';

        return(

            <section id={"nav"}>

                {

                    menu_items.map((child, i) => {

                        return  <div id={child.id} key={i+1} className={"nav-item "}>
                                    <Link to={child.url}
                                          onClick={this._handle_click.bind(this, child.name)}
                                          className={"nav-item "+ (this.state.active === child.name ? active_style : '')}>
                                        {child.name}
                                    </Link>
                                </div>

                    })

                }

            </section>

        );
    }

}

export default Nav;