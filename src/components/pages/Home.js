import React from 'react';
import projectData from '../../data/projects.json'
import ProjectCard from '../ProjectCard';
import arrowLogo from '../../images/arrow-logo.svg'
import { IconContext } from 'react-icons/lib';
import { FiArrowDown } from "react-icons/fi";
import peaceSign from "../../images/peace-sign.svg"

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
      <img className='arrow-logo-bg' src={arrowLogo} alt="large background graphic of sword logo" />
      <section id="landing-section">
        <div>
        <div className="hero-text-block">
          <p>I like to do the <span className='uppercase'>design</span> and sometimes other <span className='uppercase'>stuff</span> too.</p>
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
    <section className='say-hello-section'>
      <img className='say-hello-graphic' src={peaceSign} alt="graphic element of peace sign" />

      <div className='say-hello-text'>
        <div className="hero-text-block">
          <p><span>say hello!</span></p>
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
