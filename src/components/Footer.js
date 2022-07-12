import React from "react";
import { IconContext } from "react-icons/lib";
import { FiMail, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

function Footer() {
    return (
        <footer className="clearfix">
                <div className="footer-links-icons">
                    <IconContext.Provider value={{ className: "footer-icons", size: 22 }}>
                        <a href="mailto:hello@nickmartin.design"><FiMail /></a>
                        <a href="https://github.com/n-r-martin" target="_blank" rel="noreferrer"> <FiGithub /></a>
                        <a href="https://www.linkedin.com/in/martinnickr/" target="_blank" rel="noreferrer"><FiLinkedin /></a>
                        <a href="https://www.instagram.com/misterrubberburner/" target="_blank" rel="noreferrer"><FiInstagram /></a>
                    </IconContext.Provider>
                </div>

        </footer>
    );
}

export default Footer;

