import React from 'react';
import ContactForm from "./contact_form";
import '../../../css/contact.css'


class Contact extends React.Component{

    render(){

        return (

            <section className={"container"}>

                <h3 className={"center"} style={{marginBottom: "2em"}}>You can contact me using the form below, or on social media.</h3>

                <ContactForm />

                <div id={"contact-icons"} className={"row col-md-12"} style={{display: "flex"}}>
                    <i className="fab fa-facebook"/>
                    <i className="fab fa-twitter"/>
                    <i className="fab fa-instagram" />
                    <i className="fab fa-linkedin"/>
                    <i className="fab fa-github"/>
                </div>

            </section>

        );

    }

}

export default Contact;