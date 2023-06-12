import React, { useState } from 'react';
import '../stylesheets/nav.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export default function Nav() {
  const location = useNavigate();
  const { pathname } = useLocation();

  const [links] = useState([
    {
      name: 'About Me',
      href: '/Gerardos-Portfolio-React',
    },
    {
      name: 'Projects',
      href: '/projects',
    },
    {
      name: 'Resume',
      href: '/resume',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ]);

  return (
    <div className="div-nav">
      {links.map((link) => (
        <NavLink
          key={link.href}
          to={link.href}
          style={{
            backgroundColor: pathname === link.href ? '#0000ff' : 'none',
            color: pathname === link.href ? '#87cefa' : '#afeeee',
            width: pathname === link.href ? '100%' : '75%',
            borderRadius: pathname === link.href ? '25%' : '100%',
          }}
          className="link-nav"
          onClick={() => {
            location(link.href);
          }}
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
}