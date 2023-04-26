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
                    alt="my picture"
                    className='my-pic'
                />
            </div>
            <div className='about-p'>
                <p className='p-text'>Hello, welcome to my portfolio. My name is Gerardo. I am a linguist at heart. I graduated from Rutgers University in 2019 with a degree in linguistics and a minor in philosphy.
<br></br>
I aspire to take what I learn from my current endeavor at the UCF Coding Bootcamp for fullstack development and combine the skills I learned from computational linguistcs. As I am coming to a close with the UCF Coding Bootcamp I am confident in my abilities to create fullstack programs.
<br></br>
Please find below my current projects that I have deployed and am still developing. Thank you for your time! Please contact me with any questions or inquires.
                </p>
            </div>
        </div>
        <div className='main-foot'>
        <Footer />
        </div>
    </div>
  );
}