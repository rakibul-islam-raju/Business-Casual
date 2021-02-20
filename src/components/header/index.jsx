import React from 'react';

function header() {
    return (
        <div>
            <h1 className="site-heading text-center text-white d-none d-lg-block">
                <span className="site-heading-lower">Business Casual</span>
            </h1>

            <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
                <div className="container">
                    <a
                        className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none"
                        href="/"
                    >
                        Business Casual
                    </a>
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
                                <a className="nav-link text-uppercase text-expanded" href="/">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item active px-lg-4">
                                <a className="nav-link text-uppercase text-expanded" href="/about">
                                    About
                                </a>
                            </li>
                            <li className="nav-item active px-lg-4">
                                <a
                                    className="nav-link text-uppercase text-expanded"
                                    href="/products"
                                >
                                    Products
                                </a>
                            </li>
                            <li className="nav-item active px-lg-4">
                                <a className="nav-link text-uppercase text-expanded" href="/store">
                                    Store
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default header;
