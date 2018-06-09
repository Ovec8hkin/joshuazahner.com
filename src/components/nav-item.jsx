import React from 'react'
import { Link } from "react-router-dom";

class NavItem extends React.Component{

    render(){
        return(

            <div id={this.props.id} className={"nav-item "+ (this.props.active ? 'active' : '')}>
                <Link to={"/"+this.props.id}>{this.props.name}</Link>
            </div>

        );
    }

}

export default NavItem;