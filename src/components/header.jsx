import React from 'react';
import '../css/header.css';
import profile from '../images/Profile.jpg'
import Nav from "./nav";
import {Link } from "react-router-dom";

class Header extends React.Component{

    _

    render(){

        return (

            <div>
                <header id="header">

                    <div className="content">

                        <Link to={"/"}><img id="profile-image" className="rounded-image" src={profile} alt=""/></Link>
                        <h1>JOSHUA ZAHNER</h1>
                        <p><i>WEB AND SOFTWARE DEVELOPER</i></p>

                        <div id="header-icons">
                            <i className="fab fa-facebook-f"/>
                            <i className="fab fa-twitter"/>
                            <i className="fab fa-linkedin-in"/>
                            <i className="fab fa-github"/>
                            <i className="fas fa-envelope"/>
                        </div>

                    </div>


                </header>

                <Nav />

            </div>

        );

    }

}

export default Header;