import React from 'react';
import about from '../assets/img/about.jpg';
import Story from '../components/about/story';
import Footer from '../components/footer';
import Header from '../components/header';

function About() {
    return (
        <div>
            <Header />
            <section className="page-section about-heading">
                <div className="container">
                    <img
                        className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
                        src={about}
                        alt=""
                    />
                    <Story />
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default About;
