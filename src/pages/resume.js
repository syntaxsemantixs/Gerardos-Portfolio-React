import React, { useState } from 'react';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Resume from "../imgs/resume.png"
import WorkDiv from "../components/work.js"
import "../stylesheets/work.css";
import "../stylesheets/App.css";


export default function Res() {
    //calling in useState and creating the array of objects which will be my projects
    const [myRes, setMyRes] = useState([
        {
            image: Resume,
            title: "Bootleg Spotify",
            ResumeLink: "https://docs.google.com/document/d/12aDM7RSDITaVYjmDEciq0ZFVRcKay-xb/edit?usp=drive_web&ouid=107310610134126438495&rtpof=true",
        }
    ]);

    return (
        <div>
             <div className='main-head'>
                <Header />
            </div>
            <div className='section-header'>
                <h2 className='header-h2'>Projects</h2>
            </div>
            <div className='work-div'>
                {myRes.map((work) => {
                    return (
                    <WorkDiv
                    image={work.image}
                    title={work.title}
                    description={work.description}
                    deployed={work.deployed}
                    github={work.github}
                    />
                    );
                })}
            </div>
            <div className='big-foot'>
            <Footer />
            </div>
        </div>
      )
    }