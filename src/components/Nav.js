import { React, useState } from "react";
import "../stylesheets/nav.css";
// functions being called in, location will be navigated to
import { useLocation, useNavigate } from "react-router-dom";
 
export default function Nav() {
    let location = useNavigate();
    const { pathname } = useLocation();
// setting names and location for when you click either one you are taken to that href location
    const [links, setLinks] = useState([
        {
            name: 'About Me',
            href: '/'
        },
        {
            name: 'Projects',
            href: '/projects'
        },
        {
            name: 'Contact',
            href: '/contact'
        },
        {
            name: 'Resume',
            href: '/resume'
        }
    ]); 
    return (
        <div className="div-nav">
            {links.map((link) => {
                return (
                <a 
                style={{
                    backgroundColor: pathname === link.href ? "#0000ff" : "none",
                    color: pathname === link.href ? "#87cefa" : "#afeeee",
                    width: pathname === link.href ? "100%" : "75%",
                    borderRadius: pathname === link.href ? "25%" : "100%"
                }}
                className="link-nav" onClick={() => {
                    location(link.href);
                }}
                >
                    {link.name}
                    </a>
                );
            })}
        </div>
    );
}