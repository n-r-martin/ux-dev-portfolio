import React from "react";
import { HashLink } from 'react-router-hash-link';
import Resume from '../docs/nicholasMartin-resume.pdf';

function Navigation () {   
    return (
            <nav className="navigation-bar">
                <ul>
                    <li><HashLink to="/#work">work</HashLink></li>
                    <li><HashLink to='/#about'>about</HashLink></li>
                    <li><a href={Resume} target="_blank" rel="noreferrer">r&eacute;sum&eacute;</a></li>
                </ul>
            </nav>
    );
}

export default Navigation;
