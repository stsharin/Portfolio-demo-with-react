import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg " style={{backgroundColor: '#1f242d'}}>
            <div className="container-fluid">
                {/* <Link className="navbar-brand ms-5" style={{textDecoration: 'none', color: 'white'}} to="/">ST Sharin</Link> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-5">
                        <li className="nav-item me-0 ms-5">
                            <Link className="nav-link active ms-5" style={{textDecoration: 'none', color: 'white'}} aria-current="page" to="/home">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active ms-5" style={{textDecoration: 'none', color: 'white'}} aria-current="page" to="/about">ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active ms-5" style={{textDecoration: 'none', color: 'white'}} aria-current="page" to="#">PORTFOLIO</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active ms-5" style={{textDecoration: 'none', color: 'white'}} aria-current="page" to="#">BLOG</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active ms-5" style={{textDecoration: 'none', color: 'white'}} aria-current="page" to="#">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;