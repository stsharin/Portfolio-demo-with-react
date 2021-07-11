import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <ul className="navbar__left">
                        <div className="navbar__left-logo">
                            <img src="https://i.ibb.co/GT0cN9K/logo3.png" alt="logo" />
                        </div>
                    </ul>
                    <ul className="navbar__right">
                        <li className="me-5"><a href="">Home</a></li>
                        <li className="me-5"><a href="">About</a></li>
                        <li className="me-5"><a href="">Skills</a></li>
                        <li className="me-5"><a href="">Portfolio</a></li>
                        <li className="me-5"><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;