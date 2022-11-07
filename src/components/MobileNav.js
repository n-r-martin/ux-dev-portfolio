import React from "react";
import { HashLink } from 'react-router-hash-link';
import Resume from '../docs/nicholasMartin-resume.pdf';
import { IconContext } from "react-icons/lib";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

function MobileNav () {  
    return (
      <section className="mobile-menu">
          <ul>
            <li><HashLink to="/#work">work</HashLink></li>
            <li><HashLink to='/#about'>about</HashLink></li>
            <li><a href={Resume} target="_blank" rel="noreferrer">r&eacute;sum&eacute;</a></li>
          </ul>

        
        <div className="footer-ui">
          <h3><a href="mailto:hello@nickmartin.design">hello@nickmartin.design</a></h3>

          <h6 id="contact-number"><a href="tel:720-409-0852">720.409.0852</a></h6>
    
          <IconContext.Provider value={{ className: "mobile-footer-icons", size: 40 }}>
            <div className="mobile-footer-links-icons">
              <a href="https://github.com/n-r-martin" target="_blank" rel="noreferrer"> <FiGithub /></a>
              <a href="https://www.linkedin.com/in/martinnickr/" target="_blank" rel="noreferrer"><FiLinkedin /></a>
              <a href="https://www.instagram.com/misterrubberburner/" target="_blank" rel="noreferrer"><FiInstagram /></a>
            </div>
          </IconContext.Provider>
        </div>
      </section>
    );
}

export default MobileNav;
