import React from 'react';
import github from '../imgs/github.png';
import linkedIn from '../imgs/linkedin.png';
import twitter from '../imgs/twitter.png';
import '../stylesheets/footer.css'

export default function footer() {
    return (
        <div className='div-footer footer-img'>
            <a className='f-img' href="https://github.com/syntaxsemantixs"><img src={github} alt='gitHub' className='f-img' /></a>
            <a className='f-img' href="https://twitter.com/syntaxsemantixs"><img src={twitter} alt='twitter' className='f-img' /></a>
            <a className='f-img' href="https://www.linkedin.com/in/gerardo-ormeno/"><img src={linkedIn} alt='linkedIn' className='f-img' /></a>
        </div>
    )
};