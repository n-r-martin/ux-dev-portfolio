import React from 'react';
import { IconContext } from 'react-icons/lib';
import { FiSend, FiFileText } from "react-icons/fi";
import me from '../images/nick-martin.jpg';
import Resume from '../docs/nicholasMartin-resume.pdf';


function About() {
  return (
    <section id="about-me">
      <div id="about-me-container" className="clearfix">
        <div className='hero-text-block'>
        <span className='bold'>it me</span>
        </div>


        <div className='about-me-img-container'>
          <div id='color-stripe'></div>
          <img src={me} alt="Nick Martin in the Utah desert" className="clearfix" />
        </div>  


        <div id="about-me-text-container" className="clearfix">
          <p>Hi! I'm Nick &mdash; a Colorado based creative who believes in ethical applications of technology that inspire and drive continued innovation. I personally believe that designers are pivotal in driving, with intention, the evolution of how we interface with technology, as well as each other as we conitinue to integrate it into our lives. Technology should be first and foremost accessible to all, which means prioritizing usable, scalable patterns that are as engaging as they are approachable.</p>
          
          {/* <a id="about-me-resume-link" href="assets/nicholasMartin-resume.pdf" target="_blank">r&eacute;sum&eacute;</a> */}

          <div className='about-me-links'>
          <IconContext.Provider value={{ className: "anchor-icon-pairing", size: 28 }}>
            <a className="link-with-icon" href={Resume} target="_blank" rel="noreferrer">
            <FiFileText />
            <h3>r&eacute;sum&eacute;</h3> 
            </a>
          </IconContext.Provider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;