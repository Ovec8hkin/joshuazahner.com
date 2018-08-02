import React from 'react';
import ContactForm from "./contact_form";


class Contact extends React.Component{

    render(){

        return (

            <section className={"container"}>
                <h1>CONTACT!!</h1>
                <ContactForm />
            </section>

        );

    }

}

export default Contact;