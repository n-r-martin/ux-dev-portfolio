import React from 'react';
import { IconContext } from 'react-icons/lib';
import { FiFileText } from "react-icons/fi";
import aboutTextGraphic from '../images/about-text-graphic.svg';
import me from '../images/nick-martin.jpg';
import meTwo from '../images/nick-martin-two.jpg';
import Resume from '../docs/nicholasMartin-resume.pdf';


function About() {
  return (
    <section id="about-me">
      <img className='about-text-graphic' src={aboutTextGraphic} alt="" />

      <div id='about'></div>
      <div id="about-me-container">
        <div id="about-me-text-container">
          <div className='section-header-large'>
          <span className='bold'>it me</span>
          </div>

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

        <div className='about-me-img-container'>
          <div className='image-overlay'></div>
          <img src={meTwo} alt="Nick Martin in the Utah desert" className="clearfix" />
        </div>  
      </div>
    </section>
  );
}

export default About;