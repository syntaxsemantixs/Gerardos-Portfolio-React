import React from 'react'
import '../stylesheets/header.css'
import '../stylesheets/nav.css'
// Navigation will be called in inside the div, it is calling in the component of Nav.js
import Navigation from './Nav' 

export default function header() {
    return (
        <div className='div-header div-header-s'>
            <h1 className='header-h1'>Gerardo Ormeno-Vela</h1>
            <Navigation />       
        </div>
    )
}  