import React from 'react';
import '../css/header.css';
import profile from '../images/Profile.jpg'
import Nav from "./nav";


class Header extends React.Component{

    render(){

        return (

            <div>
                <header id="header">

                    <div className="content">

                        <img id="profile-image" className="rounded-image" src={profile} alt=""/>
                        <h1>JOSHUA ZAHNER</h1>
                        <p><i>WEB AND SOFTWARE DEVELOPER</i></p>

                        <div id="header-icons">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-linkedin-in"></i>
                            <i className="fab fa-github"></i>
                            <i className="fas fa-envelope"></i>
                        </div>

                    </div>


                </header>

                <Nav/>
            </div>

        );

    }

}

export default Header;