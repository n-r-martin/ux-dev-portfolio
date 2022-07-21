import React, { useState, useEffect } from 'react';
import projectData from '../../data/projects.json'
import ProjectCard from '../ProjectCard';
import { IconContext } from 'react-icons/lib';
import { FiArrowDown } from "react-icons/fi";
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import cyberpunkWheel from "../../images/cyberpunk-wheel.svg";
import target from "../../images/target-crosshatch.svg";
import peaceSign from "../../images/peace-sign.svg";


import About from '../About';

const glitchTimer = 2500;

const projectArr = projectData.projects;
const projectCards = projectArr.map(project => (
  <ProjectCard
    key={project.projectId}
    title={project.projectTitle} 
    projectHeader={project.projectHeader}
    projectLink={project.projectPath}
  />
))


const Home = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      toggleVisibility()
    }, glitchTimer);
    return () => {
      clearInterval(timer)
    };
  }, []);


  const toggleVisibility = () => {
    const glitchStrings = document.querySelectorAll(".glitch");
    
    for (let i = 0; i < glitchStrings.length; i++) {
      const element = glitchStrings[i];
      element.classList.toggle('visible');
    }
  }

 
 // Taking the project card data from the imported json file and creating a project card for each entry

  // This is a breakdown of what the above map method is doing
  // var projectCards = [];
  // for (var i = 0; i < projectData.length; i++) {
  //   const {
  //     ProjectTitle = projectData[i].projectTitle,
  //   } = projectData;
  //   // note: we are adding a key prop here to allow react to uniquely identify each
  //   // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
  //   projectCards.push(<ProjectCard title={ProjectTitle} key={i} />);
  // } 

  return (
    <main>
        <div className='landing-graphic-outer-container'>
          <div className='landing-graphic-inner-container'>
            <img className="cyberpunk-wheel" src={cyberpunkWheel} alt="" />
            <img className='target-graphic' src={target} alt="" />
          </div>
        </div>
      <section id="landing-section">
        <div>
          <div className="hero-text-block">
            <div className='hero-text-first-row'>
              <span>I like to do the </span>
              <div className='glitch-text-container'>
                <GlitchClip className="glitch visible" duration={glitchTimer}>
                  <span className='bold uppercase'>Design</span>
                  </GlitchClip>
                <GlitchClip className="glitch" duration={glitchTimer}>
                  <span className='bold uppercase'>Development</span>
                </GlitchClip>
              </div>
            </div>
            <div className='hero-text-second-row'>
              <span>and sometimes other</span> 
            </div>
            <div className='hero-text-third-row'>
              <span><span className='bold uppercase'>stuff</span> too.</span>
            </div>
          </div>

        <p id="landing-section-intro">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ullam enim, reprehenderit repellendus adipisci corrupti tenetur officiis magnam aperiam dolorem, quam est perspiciatis quas cum nesciunt atque, amet culpa ex. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="down-arrow-container">
        <IconContext.Provider value={{ className: "mobile-footer-icons", size: 80 }}>
          <FiArrowDown />
        </IconContext.Provider>
        </div>

        {/* <i className="fa fa-clone" aria-hidden="true"></i> */}

      
      </section>
    <div id="work"></div>
    <section id="project-cards">
      {/* Generate cards for as many as that exist where the data is being pulled from */}
      {/* Programatically assign the cards ids */}
      {projectCards}
    </section>
    <About />
    <section className='say-hello-section'>
      <div className='say-hello-text'>
      
        <div className="hero-text-block">
          <p><span className='bold'>say hello</span></p><img src={peaceSign} alt="" />
        </div>

        <p id="landing-section-intro">I'm always on the lookout for opportunities to work on exciting new projects with friendly, collborative minds!</p>

        <h3><a href="mailto:hello@nickmartin.design">hello@nickmartin.design</a></h3>
      </div>

      {/* <i className="fa fa-clone" aria-hidden="true"></i> */}
    </section>
    </main>
  );
}

export default Home;
