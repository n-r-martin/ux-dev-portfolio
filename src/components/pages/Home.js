import React, { useState, useEffect } from 'react';
import $ from "jquery";
import projectData from '../../data/projects.json'
import ProjectCard from '../ProjectCard';
import { IconContext } from 'react-icons/lib';
import { FiArrowDown } from "react-icons/fi";
import GlitchClip from 'react-glitch-effect/core/GlitchClip';

import MobileGraphic from '../MobileGraphic';
import DesktopGraphic from '../DesktopGraphic';
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
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  const handleResize = () => {
    setIsMobileViewport(window.innerWidth <  1240)
   }

// Our React hook for managing the eventListener, also calls the handle resize function on initial load
useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
})

  $(window).on('scroll', function(){
    let scrollTop = $(window).scrollTop();
    $("#landing-section").css("opacity", 1 - scrollTop / 800);
  });
  
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
      
      {isMobileViewport ? 
           null
            :
            <DesktopGraphic />
          } 
      {/* <section id="landing-section">
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
      </section> */}

      <section id="landing-section">
          <div className='superhero-text-block'>
            <h1>Nick</h1>
            <h1>Martin</h1>
            {/* <span className='bold uppercase'>Nick</span>
            <span className='bold uppercase'>Martin</span> */}
          </div>

          <div className='landing-bottom'>


          </div>




        {/* <div className="down-arrow-container">
        <IconContext.Provider value={{ className: "mobile-footer-icons", size: 80 }}>
          <FiArrowDown />
        </IconContext.Provider>
        </div> */}
      </section>
     
      <section id="project-cards">
      <div id="work"></div>
        {/* Generate cards for as many as that exist where the data is being pulled from */}
        {/* Programatically assign the cards ids */}
        {projectCards}
      </section>
    <About />
    </main>
  );
}

export default Home;
