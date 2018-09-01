import {Component} from "react";
import React from "react";

class Subheading extends Component {
    render() {
        return <h2 style={{marginBottom: "0.5em", fontWeight: "900", textTransform: "uppercase"}}>{this.props.text}</h2>;
    }
}

export default Subheading