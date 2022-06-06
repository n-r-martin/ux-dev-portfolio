import React from 'react';
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
          
          <a id="about-me-resume-link" href="assets/nicholasMartin-resume.pdf" target="_blank">r&eacute;sum&eacute;</a>

          <h3><a href="mailto:hello@nickmartin.design">hello@nickmartin.design</a></h3>

          <i className="fa fa-clone" aria-hidden="true"></i>
        </div>
      </div>
   

    </section>
  </main>
  );
}

export default About;