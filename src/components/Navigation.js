import React from "react";
// import { FaStream } from 'react-icons/fa';

function Navigation ({currentPage, handlePageChange}) {
    return (
        //  /* <FaStream /> */
            // /* Desktop Menu - visible at larger widths */
            <nav id="desktop-nav" className="global-nav-styles">
                <ul>
                <li><a href="#work-anchor-point"
                       onClick={() => handlePageChange('Home')}>work</a></li>
                <li><a href="#play"
                       onClick={() => handlePageChange('UnderConstruction')}>play</a></li>
                <li><a href="#about"
                       onClick={() => handlePageChange('About')}>about</a></li>
                <li><a href="assets/nicholasMartin-resume.pdf" target="_blank">r&eacute;sum&eacute;</a></li>
                </ul>
            </nav>
    );
}

export default Navigation;
