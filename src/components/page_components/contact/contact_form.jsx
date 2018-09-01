import React from 'react'
import '../../../css/contact.css'

class ContactForm extends React.Component{

    render(){

        return(

            <form id="contact-form" method="post" action="/send-email">

                <div className="messages"></div>

                <div className="controls">

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="form_name"> Name *</label>
                                <input id="form_name" type="text" name="name" className="form-control"
                                       placeholder="Please enter your name *" required="required"
                                       data-error="Name is required." />
                                    <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="form_email">Email *</label>
                                <input id="form_email" type="email" name="email" className="form-control"
                                       placeholder="Please enter your email *" required="required"
                                       data-error="Valid email is required." />
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="form_message">Message *</label>
                                <textarea id="form_message" name="message" className="form-control"
                                          placeholder="Message for me *" rows="8" required="required"
                                          data-error="Please, leave us a message."></textarea>
                                <div className="help-block with-errors"></div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <input type="submit" className="btn btn-orange btn-send" value="Send message" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p className="text-muted">
                                <strong>*</strong> These fields are required.
                            </p>
                        </div>
                    </div>
                </div>

            </form>

        );

    }

}

export default ContactForm;