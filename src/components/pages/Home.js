import React from 'react';
import '../../styles/Index.scss';
import projectData from '../../data/projects.json'
import ProjectCard from '../ProjectCard';


function Home() {
  // Taking the project card data from the imported json file and creating a project card for each entry
  const projectCards = projectData.map(project => (
    <ProjectCard 
      key={project.projectId}
      title={project.projectTitle} 
      subHeading={project.projectSubheading}
      description={project.projectDescription}
      roles={project.projectRoles} />
  ))

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

      <div id="work-anchor-point"></div>
    </section>

    <section id="project-cards">
      {/* Generate cards for as many as that exist where the data is being pulled from */}
      {/* Programatically assign the cards ids */}
      {projectCards}
      </section>
    </main>
  );
}

export default Home;
