import React from 'react'
import './about.css'
import Nav from '../nav/Nav'
import Header from '../header/Header'

const About = () => {
    return (
        <React.Fragment>
            <Nav />
            <Header />
            <div className="about">
                <h1 className="about-title">About</h1>
                <p className="about-text">MoonLife is a financial literacy website that aims to educate people on the basics of personal finance. We provide a variety of tools and resources to help you learn about personal finance and make better financial decisions. We hope that you will find our website useful and that you will be able to use the knowledge you gain to improve your financial situation.</p>
                <p className="about-text">MoonLife was created by a group of students at Concordia University for ConUHacks VIII.</p>
                <p className="about-text">If you have any questions or feedback, please contact us at <a href="mailto:" className="about-link"></a>email</p>
            </div>
        </React.Fragment>
    )
}

export default About