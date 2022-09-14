import React from 'react';
import peaceSign from "../images/peace-sign.svg";
import { IconContext } from 'react-icons/lib';
import { FiMail } from "react-icons/fi";
import bgGraphic from "../images/footer-bg-graphic.svg";


function Footer() {
  return (
    <>
    <footer>
      <div className='footer-content'>
            <div className="hero-text-block">
                <p><span className='bold white'>say hello</span></p>
            </div>

            <p>I'm always on the lookout for opportunities to work on exciting new projects with friendly, collborative minds!</p>

            <div className='email-link'>
                <IconContext.Provider value={{ className: "anchor-icon-pairing", size: 24 }}>
                <a className="link-with-icon white" href="mailto:hello@nickmartin.design">
                    <FiMail />
                    <h6>hello@nickmartin.design</h6>
                </a>
                </IconContext.Provider>
            </div>
        </div>
        <img className='footer-bg-graphic spin-counter-clockwise' src={bgGraphic} alt="" />
    </footer>
    </>
  );
}

export default Footer;




