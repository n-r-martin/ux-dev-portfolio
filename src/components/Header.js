import React from 'react';
import { FaStream } from 'react-icons/fa';

function Header({ currentPage, handlePageChange }) {
    return (
        <header>
            <div className="header-content-container">
            <div id="name-description-container">
                <a href="index.html">
                <h1>Nick Martin</h1>
                <h2>UX Designer | Developer</h2>
                </a>
            </div>

            <FaStream />

            {/* Desktop Menu - visible at larger widths */}
            <nav id="desktop-nav" className="global-nav-styles">
                <ul>
                <li><a href="index.html#work-anchor-point">work</a></li>
                <li><a href="under-construction.html">play</a></li>
                <li><a href="about.html">about</a></li>
                <li><a href="assets/nicholasMartin-resume.pdf" target="_blank">r&eacute;sum&eacute;</a></li>
                </ul>
            </nav>
            </div>
        </header>
    );
}

export default Header;
