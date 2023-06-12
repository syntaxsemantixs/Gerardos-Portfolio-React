import React, { useState } from 'react';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import WorkDiv from "../components/Projects.js"
// import photos of projects
import Notetaker from "../imgs/notetaker.png";
import Pospamper from "../imgs/pospamper.png";
import ProRead from "../imgs/pro-read-me.png";
import Employee from "../imgs/employee.png";
import Chop from "../imgs/chop.png";
import "../stylesheets/App.css"
import "../stylesheets/work.css"

export default function Work() {
    //calling in useState and creating the array of objects which will be my projects
    const [myWork, setMyWork] = useState([
        {
            image: Notetaker,
            title: "Notetaker Heroku App",
            description: "App uses heroku to deploy a front-end notetaker that uses routes to follow the CRUD Model",
            deployed: "https://notetaker-heroku-app.herokuapp.com/",
            github: "https://github.com/syntaxsemantixs/notetaker-heroku-app"   
        },
        {
            image: Chop,
            title: "Chop Shop TKO",
            description: "One of the first projects created using frontend Javascript. This app cycles through questions for a coding quiz. Allows you to keep highscores and compete with friends.",
            deployed: "https://chop-shop-tko.herokuapp.com/",
            github: "https://github.com/gamesharks/chop-shop-tko"   
           },
        {
            image: Pospamper,
            title: "Positively Pampered",
            description: "Pet E-commerce website where you can signup and log your pets medical and food needs. The site also has a contact page using nodemailer. Our product tab shows many different types of pet accesories and food items.",
            deployed: "https://sleepy-cove-33031.herokuapp.com/",
            github: "https://github.com/Pets-Project/Pawsitively-Pampered"    
           },
           {
            image: ProRead,
            title: "Professional Readme to go",
            description: "This app asks you questions to fill out and it will generate a new Readme. This is effective especially if you have everything set up.",
            deployed: "https://drive.google.com/file/d/17mrPqChjccO7p81gOVRMAhGB53ZHhTv9/view",
            github: "https://github.com/syntaxsemantixs/Professional-ReadMe-To-Go"   
           },
           {
            image: Employee,
            title: "Employee Tracker",
            description: "This app is a database created with MySQL that fills user data for employees.",
            deployed: "https://drive.google.com/file/d/1S2HUOvu12YxBfovXYzEPXsRGmq_IZIQu/view",
            github: "https://github.com/syntaxsemantixs/employee-tracker"   
           },
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
            {myWork.map((work) => {
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