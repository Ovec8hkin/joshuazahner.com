import React from 'react'
import GGB from '../../../images/san-fran.jpg'
import "../../../css/blogpost.css"
import LinkButton from "../common/LinkButton";
import Pill from "../common/Pill";

class BlogPostShort extends React.Component{

    render(){

        return(

            <article className={"post-short"}>
                <img src={GGB} className={"square"} />
                <h2>Post Title</h2>
                <p>Morbi at viverra velit. Mauris et volutpat dui. Etiam sit amet ligula facilisis, convallis leo vel, elementum mi. Donec pretium arcu id quam rhoncus pulvinar.</p>
                <Pill text={"Read More"}/>
            </article>

        )

    }

}

export default BlogPostShort;