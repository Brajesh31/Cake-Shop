import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="cont container-fluid">
                <nav className="navbar navbar-expand-lg  d-flex align-items-center justify-content-between">
                    <div className="icon d-flex gap-3 d-none d-sm-block mt-4">
                        <i className="fa-brands fa-facebook ms-3"></i>
                        <i className="fa-brands fa-instagram ms-3"></i>
                        <i className="fa-brands fa-twitter ms-3"></i>
                    </div>

                    <div className="logo-container flex-grow-1 d-flex justify-content-center ms-0 ps-0 ms-lg-5 ps-lg-5">
                        <img src={"/img/logo.png"} className="img mt-4" alt="image" />
                    </div>

                    <div className="d-none d-sm-block d-md-none d-lg-block ms-auto">
                        <p className="me-5 mt-5 number d-flex justify-content-center align-items-center">Call Us:+9998172499</p>
                    </div>

                    <button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>

                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="para_two fs-6 collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav mx-auto pe-5">
                                <Link className="nav-link active text-light" aria-current="page" to="/">HOME</Link>
                                <Link className="nav-link text-light" to="/cakes">CAKES</Link>
                                <Link className="nav-link text-light" to="/about">ABOUT</Link>
                                <Link className="nav-link text-light" to="/blog">BLOG</Link>
                                <Link className="contact nav-link text-light" to="#">CONTACT</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;