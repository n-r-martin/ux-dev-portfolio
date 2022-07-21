import React from "react";
import { Link } from "react-router-dom";
import Resume from '../docs/nicholasMartin-resume.pdf';

function Navigation () {   
    return (
            <nav className="navigation-bar">
                <ul>
                    <li><Link id='work-link' to="work">work</Link></li>
                    <li><Link to='about'>about</Link></li>
                    <li><a href={Resume} target="_blank" rel="noreferrer">r&eacute;sum&eacute;</a></li>
                </ul>
            </nav>
    );
}

export default Navigation;
