import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import projectData from '../../data/projects.json'
import ProjectCard from '../ProjectCard';

const projectCards = projectData.map(project => (
  <ProjectCard
    key={project.projectId}
    title={project.projectTitle} 
    subHeading={project.projectSubheading}
    description={project.projectDescription}
    roles={project.projectRoles} />
))


const Home = () => {
  let location = useLocation();

  // fix for clicking to work section from root url or if already on home page
  const handleScrollToWork = event => {
    event.preventDefault();
    let elem = document.getElementById('work');
    elem.scrollIntoView({behavior: "smooth"})
  }

  useEffect(()=> {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
          elem.scrollIntoView({behavior: "smooth"})
      }
    } else {
      window.scrollTo({top:0,left:0, behavior: "smooth"})
    } 

    const workLink = document.getElementById('work-link');
    
    workLink.addEventListener('click', handleScrollToWork);

    return () => {
      workLink.removeEventListener("click", handleScrollToWork);
    };
}, [location])
  
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
    <section id="landing-section">
      <div className="hero-text-block">
        <p>I like to do the <span>design</span> and sometimes other <span>stuff</span> too.</p>
      </div>

      <p id="landing-section-intro">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus ullam enim, reprehenderit repellendus adipisci corrupti tenetur officiis magnam aperiam dolorem, quam est perspiciatis quas cum nesciunt atque, amet culpa ex. Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

      <h3><a href="mailto:hello@nickmartin.design">hello@nickmartin.design</a></h3>

      {/* <i className="fa fa-clone" aria-hidden="true"></i> */}

      
    </section>
    <div id="work"></div>
    <section id="project-cards">
      {/* Generate cards for as many as that exist where the data is being pulled from */}
      {/* Programatically assign the cards ids */}
      {projectCards}
      </section>
    </main>
  );
}

export default Home;
