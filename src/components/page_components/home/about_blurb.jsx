import React from 'react'
import {Link} from 'react-router-dom'
import "../../../css/homepage-elements.css"
import GGB from '../../../images/san-fran.jpg'

class AboutBlurb extends React.Component{

    render(){

        return(

            <article id={"about_blurb"}>

                <img src={GGB}/>
                <div className={"article-content"}>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat quam at ornare lobortis. Morbi mollis neque et mi posuere porta. Morbi mollis facilisis elementum. Proin non orci urna. Nulla non augue orci. Vestibulum imperdiet venenatis tortor, nec eleifend mauris rhoncus quis. Quisque porttitor sem ut justo tincidunt, eget iaculis velit scelerisque. Fusce lacus metus, rutrum et congue eu, convallis quis sapien. Quisque ullamcorper nunc sit amet augue dignissim semper vitae ut ligula. Vivamus mi mi, molestie id condimentum sed, dapibus in nibh.</p>
                    <p>Morbi at viverra velit. Mauris et volutpat dui. Etiam sit amet ligula facilisis, convallis leo vel, elementum mi. Donec pretium arcu id quam rhoncus pulvinar. In faucibus lacus a accumsan elementum. Nulla sit amet leo sed elit faucibus cursus quis at magna. Vivamus sed condimentum massa, rutrum sollicitudin nunc.</p>

                    <Link to={"/about"} className={"button"}> About Me</Link>

                </div>

            </article>

        )

    }

}

export default AboutBlurb;