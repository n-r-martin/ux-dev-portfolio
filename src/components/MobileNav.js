import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MobileNav () {
    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
     setIsMobile(window.innerWidth < 768)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    })
    
    return (
      <section className="mobile-menu">
          <ul>
            <li><a href="index.html#work-anchor-point">work</a></li>
            <li><a href="#">play</a></li>
            <li><a href="about.html">about</a></li>
            <li><a href="assets/nicholasMartin-resume.pdf" target="_blank">r&eacute;sum&eacute;</a></li>
          </ul>

        
        <div className="footer-ui">
          <h3><a href="mailto:hello@nickmartin.design">hello@nickmartin.design</a></h3>
    
          <div className="footer-links-icons">
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </div>
        </div>
      </section>
    );
}

export default MobileNav;
