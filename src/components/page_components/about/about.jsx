import React from 'react';
import '../../../css/header.css';
import AboutBlurb from "../home/about_blurb";
import '../../../css/about.css'
import Blurb from "../common/blurb";


class About extends React.Component{

    render(){

        let b1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat quam at ornare lobortis. Morbi mollis neque et mi posuere porta. Morbi mollis facilisis elementum. Proin non orci urna. Nulla non augue orci. Vestibulum imperdiet venenatis tortor, nec eleifend mauris rhoncus quis. Quisque porttitor sem ut justo tincidunt, eget iaculis velit scelerisque. Fusce lacus metus, rutrum et congue eu, convallis quis sapien. Quisque ullamcorper nunc sit amet augue dignissim semper vitae ut ligula. Vivamus mi mi, molestie id condimentum sed, dapibus in nibh.\nMorbi at viverra velit. Mauris et volutpat dui. Etiam sit amet ligula facilisis, convallis leo vel, elementum mi. Donec pretium arcu id quam rhoncus pulvinar. In faucibus lacus a accumsan elementum. Nulla sit amet leo sed elit faucibus cursus quis at magna. Vivamus sed condimentum massa, rutrum sollicitudin nunc.\nMorbi at viverra velit. Mauris et volutpat dui. Etiam sit amet ligula facilisis, convallis leo vel, elementum mi. Donec pretium arcu id quam rhoncus pulvinar. In faucibus lacus a accumsan elementum. Nulla sit amet leo sed elit faucibus cursus quis at magna. Vivamus sed condimentum massa, rutrum sollicitudin nunc."


        return (

            <div>
                <section className={"container"}>
                    <AboutBlurb />
                </section>

                <div className={"container-fluid"} id={'picture-row'}>
                    <img src={require('../../../images/san-fran.jpg')} />
                    <img src={require('../../../images/san-fran.jpg')} />
                    <img src={require('../../../images/san-fran.jpg')} />
                    <img src={require('../../../images/san-fran.jpg')} />
                    <img src={require('../../../images/san-fran.jpg')} />
                </div>

                <section className={"container"}>
                    <Blurb backwards={true} content={b1} />
                </section>

                <section className={"container"}>
                    <Blurb content={b1} />
                </section>

                <section className={"container"}>
                    <Blurb backwards={true} content={b1} />
                </section>

            </div>

        );

    }

}

export default About;