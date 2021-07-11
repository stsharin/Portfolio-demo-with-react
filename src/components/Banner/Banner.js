import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaGithub, FaPlay } from "react-icons/fa";

const Banner = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header__section">
                                <ul className="header__ul">
                                    <li><FaFacebookF /></li>
                                    <li><FaInstagram /></li>
                                    <li><FaLinkedin /></li>
                                    <li><FaGithub /></li>
                                    <li><FaTwitter /></li>
                                </ul>
                                <h1>I'm Saraban Tasnim Sharin</h1>
                                <p>I'm a professional full-stack web developer with lots of experience in this field. I develop MERN projects.
                                </p>
                                <div className="header__buttons">
                                    <a href="/" className="btn btn-outline">My Portfolio</a>
                                    &nbsp;&nbsp;&nbsp;
                                    <a href="/" className="btn btn-smart"><FaPlay className="play"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="banner__img">
                            <img src="https://i.ibb.co/1mM7b4V/profile1.png" alt="me" />
                            
                            {/* https://i.ibb.co/gZwFjbc/1613172209189.jpg */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;