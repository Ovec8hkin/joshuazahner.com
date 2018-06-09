import React from 'react'
import "../css/nav.css"
import NavItem from "./nav-item";

class Nav extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            active: 0,
            items: [
                    {id: "about", name: "About"},
                    {id: "projects", name: "Projects"},
                    {id: "contact", name: "Contact"},
                    {id: "blog", name: "Blog"}
                   ]
        };

    }

    componentDidMount(){
        this.setState({
            active: this.props.active
        });
    }

    render(){

        return(

            <section id={"nav"}>

                {

                    this.state.items.map((child, i) => {
                        const active = ( i === this.state.active );
                        return <NavItem key={i} id={child.id} active={active} name={child.name} />
                    })

                }

            </section>

        );
    }

}

export default Nav;