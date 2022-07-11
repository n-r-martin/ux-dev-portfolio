import React from "react";
import { IconContext } from "react-icons/lib";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

function Footer() {
    return (
        <footer className="clearfix">
            <div className="diamond-accent"></div>

            <div className="footer-ui">
                <h3><a href="mailto:hello@nickmartin.design">hello@nickmartin.design</a></h3>

                <h6 id="contact-number"><a href="tel:720-409-0852">720.409.0852</a></h6>

                <div className="footer-links-icons">
                <IconContext.Provider value={{ className: "footer-icons", size: 40 }}>
                    <a href="https://github.com/n-r-martin" target="_blank" rel="noreferrer"> <FiGithub /></a>
                    <a href="https://www.linkedin.com/in/martinnickr/" target="_blank" rel="noreferrer"><FiLinkedin /></a>
                    <a href="https://www.instagram.com/misterrubberburner/" target="_blank" rel="noreferrer"><FiInstagram /></a>
                </IconContext.Provider>
                </div>
            </div>
    </footer>
    );
}

export default Footer;

