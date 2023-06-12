import React from 'react'
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import MyPic from "../imgs/my-pic.png";
import "../stylesheets/App.css"

export default function About() {
  return (
    <div>
        <div className='main-head'>
            <Header />
        </div>
        <div className='section-header'>
                <h2 class="header-h2">About Me</h2>
            </div>
        <div className='about-body'>
            <div className='about-pic'>
                <img 
                    src={MyPic}
                    alt="Profile View"
                    className='my-pic'
                />
            </div>
            <div className='about-p'>
                <p className='text-container'>Hello, welcome to my portfolio. My name is Gerardo. I am a linguist at heart. I graduated from Rutgers University in 2019 with a degree in linguistics and a minor in philosophy. I just graduated from the UCF Coding Bootcamp for Full stack Development. <b><u>I am fluent in HTML, CSS and JavaScript. I have also worked with PHP and python.</u></b> Please find below my current projects that I have deployed and am still developing. Thank you for your time! Please contact me with any questions or inquires.
                </p>
            </div>
        </div>
        <div className='main-foot'>
        <Footer />
        </div>
    </div>
  );
}