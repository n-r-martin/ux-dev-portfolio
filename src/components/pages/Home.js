import React, { useState, useEffect } from 'react';
import $ from "jquery";
import projectData from '../../data/projects.json'
import ProjectCard from '../ProjectCard';
import { IconContext } from 'react-icons/lib';
import { FiArrowDown } from "react-icons/fi";
import GlitchClip from 'react-glitch-effect/core/GlitchClip';

import spacewave from "../../images/spacewave.svg";
import calculation from "../../images/calculation.svg";
import topography from "../../images/topography.svg";
import cyberBannerVertical from "../../images/cyberpunk-banner-vertical.svg";
import cyberBanner from "../../images/cyberpunk-banner.svg";
import stGeorge from "../../images/st-george.png";
import gradientBars from "../../images/gradient-bars.svg";
import redShapeBgImg from "../../images/red-shape-bg.png";
import mazeTexture from "../../images/maze-texture.png";
import topLeftBgElem from "../../images/top-left-bg-elements.svg";
import topRightBgElem from "../../images/top-right-bg-elements.svg";
import cyberTextureLeft from "../../images/cyber-texture-left.svg";
import cyberTextureRight from "../../images/cyber-texture-right.svg";
import workWordSquare from "../../images/work-word-square.svg";


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

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  const handleResize = () => {
    setIsMobileViewport(window.innerWidth <  520);
   }

// Our React hook for managing the eventListener, also calls the handle resize function on initial load
useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
})


// Get offset of bottom of landing section from the top of the page
// Dynamically ensure that initial value of the top of the concealment shape is at the bottom of the landing section
// Meaning that if the height of the window changes, the intial calue (the zero state) changes with it
// dynamically calculating position of concelament shape to adjust with A) scroll and B) window resize so that if the window IS resized ir's position is based off a dynamic intial position. 
// Maybe we don't manipulate the 'top' value and instead use 'translate' -- perhaps top needs to be set by the css and remain there and translateY is a property we can manipulate based on scrollTop difference - translate in a PERCENTAGE?!?!? instead of pixels?

// It's the cyberpunk wheel that's causing the inconsistent scroll position on load


// Need to guarantee that the concelaing shape is always behind the project cards, no matter where the top project cards section might be after load, reload, or page height resize.
 // What if page is resized if user is scrolled down further on the page?

  $(window).on('scroll', function(){
    let scrollTop = $(window).scrollTop();
    // $("#landing-section").css("opacity", 1 - scrollTop / 800);
    $('.concealing-shape-white').css({'transform' : 'translateY(' + -scrollTop * 2.25 + 'px)'});
    $('.gradient-bars').css({'transform' : 'translateY(' + -scrollTop * 2.25 + 'px)'});
    $('.concealing-shape-red').css({'transform' : 'translateY(' + -scrollTop * 1.5 + 'px)'});
    $('.maze-texture').css({'transform' : 'translateY(' + -scrollTop * 1 + 'px)'});
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
      
      {/* {isMobileViewport ? 
           null
            :
            <DesktopGraphic />
          }  */}

      <section id="landing-section">
          <div className='superhero-text-block'>
            <h1>Nick</h1>
            <h1>Martin</h1>
            {/* <span className='bold uppercase'>Nick</span>
            <span className='bold uppercase'>Martin</span> */}
          </div>

          <div className='landing-bottom'>
            <div className="landing-bottom-hero-text">
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

            <div className="down-arrow-container">
            <IconContext.Provider value={{ className: "landing-bottom-arrow-icon", size: 48 }}>
              <FiArrowDown />
            </IconContext.Provider>
           </div>

           <div className='spacey-ui-graphics'>
                    <img className="spacewave-img" src={spacewave} alt="" />
                    <img className="calculation-img" src={calculation} alt="" />
                    <img className="topography-img" src={topography} alt="" />
              </div>

            {isMobileViewport ? 
              <img className='cyber-banner-vertical' src={cyberBannerVertical} alt="" />
            :
              <img className='cyber-banner' src={cyberBanner} alt="" />
            } 
           


            <div className='white-black-type-block'>
              <span>HTML5</span>
              <span>CSS3</span> 
              <span>JavaScript</span>
              <span>ReactJS</span>
              <span>Figma</span>
              <span>AdobeXD</span> 
              <span>NodeJS</span>
              <span>MongoDB</span>
              <span>Git</span>
              <span>Sketch</span> 
              <span>Jira</span>
              <span>Azure DevOps</span>
            </div>
          </div>
        {/* <div className="down-arrow-container">
        <IconContext.Provider value={{ className: "mobile-footer-icons", size: 80 }}>
          <FiArrowDown />
        </IconContext.Provider>
        </div> */}
      </section>

      {/* <div className='concealing-shape-one' style={{ backgroundImage:`url(${topographyBG})` }}></div> */}
      {/* <img src={topographyConcealShape} className='concealing-shape-one'/> */}
      {/* <div className='concealing-shape-two'></div> */}
      {/* <div className='concealing-shape-three'></div>  */}

      <div className='concealing-shape-white'>
        <div className='shape-inner-container'>
          <div className='border-trick'></div>
          <div className='shape'>
            <img className="st-george" src={stGeorge} alt="" />
            <img className='gradient-bars' src={gradientBars} alt="" />
          </div>
        </div>
      </div>

      <div className='concealing-shape-red'>
        <div className='shape-inner-container'>
          <div className='border-trick'></div>
          <div className='shape'>
            <img className='red-bg-img' src={redShapeBgImg} alt="" />
            <img className='maze-texture' src={mazeTexture} alt="" />
            <DesktopGraphic/>
            {/* <img className='target-crosshatch' src={targetGraphic} alt="" /> */}
            <img className='top-left-bg-elem' src={topLeftBgElem} alt="" />
            <img className='top-right-bg-elem' src={topRightBgElem} alt="" />
            <img className='cyber-texture-right' src={cyberTextureRight} alt="" />
          </div>
        </div>
      </div>
     
        <section id="project-cards">
          <div className='section-circle-accent'></div>
          {/* <img className='work-word-square' src={workWordSquare} alt="" /> */}
          <div id="work"></div>
          <div className='section-header'>
            <div className='header-accent'>
              <div className='header-accent-circle'></div>
              <span className='bold uppercase'>work</span>
            </div>
            <div className='header-strikethrough'></div>
            <span className='bold'>work</span>
            <div className='header-strikethrough'></div>
          </div>
          {/* Generate cards for as many as that exist where the data is being pulled from */}
          {/* Programatically assign the cards ids */}
          {projectCards}
        </section>
        <About />
    </main>
  );
}

export default Home;
