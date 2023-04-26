import React, { useState } from 'react';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Resume from "../imgs/resume.png"
import WorkDiv from "../components/Resume.js"
import "../stylesheets/work.css";
import "../stylesheets/App.css";


export default function Res() {
    //calling in useState and creating the array of objects which will be my projects
    const [myRes, setMyRes] = useState([
        {
            image: Resume,
            title: "Resume",
            resume: "https://docs.google.com/document/d/12aDM7RSDITaVYjmDEciq0ZFVRcKay-xb/edit?usp=drive_web&ouid=107310610134126438495&rtpof=true",
        }
    ]);

    return (
        <div>
             <div className='main-head'>
                <Header />
            </div>
            <div className='section-header'>
                <h2 className='header-h2'>Resume</h2>
            </div>
            <div className='work-div'>
                {myRes.map((res) => {
                    return (
                    <WorkDiv
                    image={res.image}
                    resume={res.resume}

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