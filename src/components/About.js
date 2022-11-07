import React from 'react';
import { IconContext } from 'react-icons/lib';
import { FiCircle, FiFileText } from "react-icons/fi";
import me from '../images/nick-martin.jpg';
import Resume from '../docs/nicholasMartin-resume.pdf';


function About() {
  return (
    <section id="about-me">
      <div id='about'></div>

      <div className='section-header about-desktop-header'>
        <div className='header-accent'>
          <div className='header-accent-circle'></div>
          <span className='bold uppercase'>about</span>
        </div>
        <div className='header-strikethrough'></div>
        <span className='bold'>it me</span>
        <div className='header-strikethrough'></div>
      </div>
     
      <div id="about-me-container">
        <div>
            <div className='section-header about-mobile-header'>
            <div className='header-accent'>
              <div className='header-accent-circle'></div>
              <span className='bold uppercase'>about</span>
            </div>
            <div className='header-strikethrough'></div>
            <span className='bold'>it me</span>
            <div className='header-strikethrough'></div>
          </div>

          <div className='about-me-img-container'>
            <div className='image-overlay'></div>
            <img src={me} alt="Nick Martin in the Utah desert" className="clearfix" />
          </div>  
        </div>
        

        <div id="about-me-text-container">
          {/* <div>
            <h4>it me</h4>
          </div> */}

          <p>Hi! I'm Nick &mdash; a Colorado based creative who believes in ethical applications of technology that inspire and drive continued innovation. I personally believe that designers are pivotal in driving, with intention, the evolution of how we interface with technology, as well as each other as we conitinue to integrate it into our lives. Technology should be first and foremost accessible to all, which means prioritizing usable, scalable patterns that are as engaging as they are approachable.</p>
          
          {/* <a id="about-me-resume-link" href="assets/nicholasMartin-resume.pdf" target="_blank">r&eacute;sum&eacute;</a> */}

          <div className='resume-link'>
          <IconContext.Provider value={{ className: "anchor-icon-pairing", size: 24 }}>
            <a className="link-with-icon" href={Resume} target="_blank" rel="noreferrer">
            <FiFileText />
            <h6>r&eacute;sum&eacute;</h6> 
            </a>
          </IconContext.Provider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;