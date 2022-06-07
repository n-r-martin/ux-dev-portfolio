import React from 'react';
import { IconContext } from 'react-icons/lib';
import { FiSend, FiFileText } from "react-icons/fi";
import bgGraphic from '../../images/about-me-bg.svg';
import me from '../../images/nick-martin.jpg';


function About() {
  return (
    <main>
    <img src={bgGraphic} alt="design element on page background" className="about-me-bg-graphic" />
    <section id="about-me">
      <div id="about-me-container" className="clearfix">
      <div id="about-me-title" className="hero-text-block underlined">
            <p>it <span>me</span></p>
          </div>

        <div className='about-me-img-container'>
          <div id='color-stripe'></div>
          <img src={me} alt="Nick Martin in the Utah desert" className="clearfix" />
        </div>  


        <div id="about-me-text-container" className="clearfix">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ullam enim, reprehenderit repellendus adipisci corrupti tenetur officiis magnam aperiam dolorem, quam est perspiciatis quas cum nesciunt atque, amet culpa ex. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ullam enim, reprehenderit repellendus adipisci corrupti tenetur officiis magnam aperiam dolorem, quam est perspiciatis quas cum nesciunt atque, amet culpa ex. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          
          {/* <a id="about-me-resume-link" href="assets/nicholasMartin-resume.pdf" target="_blank">r&eacute;sum&eacute;</a> */}

          <div className='about-me-links'>
          <IconContext.Provider value={{ className: "anchor-icon-pairing", size: 20 }}>
            <a className='email-link-with-icon' href="mailto:hello@nickmartin.design">
              <FiFileText />
              <p className='icon-pairing'>résumé</p>
            </a>

            <a className='email-link-with-icon' href="mailto:hello@nickmartin.design">
              <FiSend />
              <p className='icon-pairing'>hello@nickmartin.design</p>
            </a>
          </IconContext.Provider>
          </div>
        </div>
      </div>
   

    </section>
  </main>
  );
}

export default About;