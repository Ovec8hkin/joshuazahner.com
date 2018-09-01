import React from 'react'
import GGB from "../../../images/san-fran.jpg";
import LinkButton from "./LinkButton";

class Blurb extends React.Component{

    render(){

        let button;
        let class_name;

        if(this.props.showButton){
            button = <LinkButton link={"/about"} name={"About Me"} />
        }else{
            button = ""
        }

        if(this.props.backwards){
            class_name = "blurb_back"
        }else{
            class_name = "blurb"
        }

        return (

            <article className={class_name}>

                <img src={GGB}/>
                <div className={"article-content"}>

                    {this.props.content}

                    {button}

                </div>

            </article>

        )

    }

}

export default Blurb;