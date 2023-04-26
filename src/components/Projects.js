import React from "react";
import '../stylesheets/work.css';

export default function PropWork(props) {
    return (
        <div className="div-work">
            <figure>
                <img
                src={props.image}
                alt='test'
                className="img-work"
                />
            </figure>
            <div className="work-body">
                <h3 className="work-title">{props.title}</h3>
                <p className="work-description">{props.description}</p>
                <a className="work-links" href={props.deployed}>Deployed App</a>
                <a className="work-links" href={props.github}>Github Repo</a>
            </div>
       ; </div>
    )
}