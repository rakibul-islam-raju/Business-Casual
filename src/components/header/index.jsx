import { Link } from '@reach/router';
import React from 'react';

function header() {
    return (
        <div>
            <h1 className="site-heading text-center text-white d-none d-lg-block">
                <span className="site-heading-lower">Business Casual</span>
            </h1>

            <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
                <div className="container">
                    <Link
                        className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none"
                        to="/"
                    >
                        Business Casual
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item active px-lg-4">
                                <Link className="nav-link text-uppercase text-expanded" to="/">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item active px-lg-4">
                                <Link className="nav-link text-uppercase text-expanded" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item active px-lg-4">
                                <Link
                                    className="nav-link text-uppercase text-expanded"
                                    to="/products"
                                >
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item active px-lg-4">
                                <Link className="nav-link text-uppercase text-expanded" to="/store">
                                    Store
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default header;
