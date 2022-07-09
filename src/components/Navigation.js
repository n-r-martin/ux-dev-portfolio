import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function Navigation (props) {
    const [isMobile, setIsMobile] = useState(false);


    const handleResize = () => {
     setIsMobile(window.innerWidth < 768)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    })

    
    return (
            <nav className="navigation-bar">
             {isMobile ? 
                <>
                {/* <MobileNav className={menuOpenedClass} /> */}
                </>
             : 
                <ul>
                    <li><Link id='work-link' to="work">work</Link></li>
                    <li><Link to='play'>play</Link></li>
                    <li><Link to='about'>about</Link></li>
                    <li><a href="assets/nicholasMartin-resume.pdf" target="_blank">r&eacute;sum&eacute;</a></li>
                </ul>
            }
            </nav>
    );
}

export default Navigation;
