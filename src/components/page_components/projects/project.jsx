import React, {Component} from 'react'
import Carousel from './carousel.jsx'
import '../../../css/project.css'
import Pill from "../common/Pill"
import SkillLogo from "./SkillLogo";
import Subheading from "../common/subheading";
import CustomerReview from "./CustomerReview";


class Project extends React.Component{

    render(){
        return (

            <section className={"container"}>
                <h1>Pattonville School District Mobile App</h1>
                <div id={"details"}>
                    <Pill text={"Pattonville School District"}/>
                    <Pill text={"Aug 2016 - June 2017"}/>
                    <Pill text={"iOS Application"}/>
                </div>
                <div className={"row col-md-12"}>
                    <Carousel/>
                </div>
                <div className={"col-md-12"} style={{marginTop: "5em"}}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat quam at ornare
                        lobortis. Morbi mollis neque et mi posuere porta. Morbi mollis facilisis elementum. Proin non
                        orci urna. Nulla non augue orci. Vestibulum imperdiet venenatis tortor, nec eleifend mauris
                        rhoncus quis. Quisque porttitor sem ut justo tincidunt, eget iaculis velit scelerisque. Fusce
                        lacus metus, rutrum et congue eu, convallis quis sapien. Quisque ullamcorper nunc sit amet augue
                        dignissim semper vitae ut ligula. Vivamus mi mi, molestie id condimentum sed, dapibus in
                        nibh.</p>
                    <p>Morbi at viverra velit. Mauris et volutpat dui. Etiam sit amet ligula facilisis, convallis leo
                        vel, elementum mi. Donec pretium arcu id quam rhoncus pulvinar. In faucibus lacus a accumsan
                        elementum. Nulla sit amet leo sed elit faucibus cursus quis at magna. Vivamus sed condimentum
                        massa, rutrum sollicitudin nunc.</p>
                    <p>Sed malesuada turpis et porttitor porttitor. Integer est felis, venenatis et tempus eget, mattis
                        eu lacus. Integer cursus, nunc ut posuere tempor, massa mi efficitur massa, et elementum velit
                        turpis sit amet tortor. Donec posuere placerat risus, a euismod lectus mollis quis. Integer
                        varius massa sit amet lorem facilisis, lacinia posuere purus blandit. Duis nec pellentesque dui.
                        Phasellus eu lectus sit amet sapien lobortis ullamcorper. Mauris accumsan ante ac ex molestie,
                        sit amet tincidunt sem malesuada. Ut non risus ut ante faucibus auctor vitae ac erat. Aenean
                        euismod lacus ac est auctor, ut semper ante elementum. Orci varius natoque penatibus et magnis
                        dis parturient montes, nascetur ridiculus mus.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat quam at ornare
                        lobortis. Morbi mollis neque et mi posuere porta. Morbi mollis facilisis elementum. Proin non
                        orci urna. Nulla non augue orci. Vestibulum imperdiet venenatis tortor, nec eleifend mauris
                        rhoncus quis. Quisque porttitor sem ut justo tincidunt, eget iaculis velit scelerisque. Fusce
                        lacus metus, rutrum et congue eu, convallis quis sapien. Quisque ullamcorper nunc sit amet augue
                        dignissim semper vitae ut ligula. Vivamus mi mi, molestie id condimentum sed, dapibus in
                        nibh.</p>
                    <p>Morbi at viverra velit. Mauris et volutpat dui. Etiam sit amet ligula facilisis, convallis leo
                        vel, elementum mi. Donec pretium arcu id quam rhoncus pulvinar. In faucibus lacus a accumsan
                        elementum. Nulla sit amet leo sed elit faucibus cursus quis at magna. Vivamus sed condimentum
                        massa, rutrum sollicitudin nunc.</p>
                </div>
                <div className={"row col-md-12"} style={{marginTop: "5em"}}>

                    <div className={'col-md-6 col-sm-12 col-xs-12'} >
                        <Subheading text={'Technologies Used'}/>
                        <SkillLogo img={'swift'}/>
                        <SkillLogo img={'xcode'}/>
                        <SkillLogo img={'agile'}/>
                        <SkillLogo img={'git'}/>
                    </div>

                    <div className={"col-md-6 col-sm-12 col-xs-12"}>
                        <CustomerReview />
                    </div>

                </div>


            </section>

        )
    }

}
export default Project;