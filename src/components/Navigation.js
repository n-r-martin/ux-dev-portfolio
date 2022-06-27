import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
// import { FaStream } from 'react-icons/fa';

function Navigation (props) {
    return (
        //  /* <FaStream /> */
            // /* Desktop Menu - visible at larger widths */
            <nav id="desktop-nav" className="global-nav-styles">
                <ul>
                    <li><Link id='work-link' to="/#work">work</Link></li>
                    <li><Link to='play'>play</Link></li>
                    <li><Link to='about'>about</Link></li>
                    <li><a href="assets/nicholasMartin-resume.pdf" target="_blank">r&eacute;sum&eacute;</a></li>
                </ul>
            </nav>
    );
}

export default Navigation;
