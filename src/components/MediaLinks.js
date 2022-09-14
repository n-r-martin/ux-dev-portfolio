import React from "react";
import { IconContext } from "react-icons/lib";
import { FiMail, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

function MediaLinks() {
    return (
        <div className='media-links-container'>
                <div className="media-links-icons">
                    <IconContext.Provider value={{ className: "media-icons", size: 32 }}>
                        <a href="mailto:hello@nickmartin.design"><FiMail /></a>
                        <a href="https://github.com/n-r-martin" target="_blank" rel="noreferrer"> <FiGithub /></a>
                        <a href="https://www.linkedin.com/in/martinnickr/" target="_blank" rel="noreferrer"><FiLinkedin /></a>
                        <a href="https://www.instagram.com/misterrubberburner/" target="_blank" rel="noreferrer"><FiInstagram /></a>
                    </IconContext.Provider>
                </div>

        </div>
    );
}

export default MediaLinks;

