import React from 'react';
import '../../styles/Index.scss';
import jsonData from '../../data/projects.json'
import ProjectCard from '../ProjectCard';


function Home() {
  console.log(jsonData);

  const {
    ProjectTitle = jsonData.projectTitle,
  } = jsonData;

  console.log(ProjectTitle);

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
      <ProjectCard title={ProjectTitle}/>
      <ProjectCard title={ProjectTitle}/>
      <ProjectCard title={ProjectTitle}/>
      </section>
    </main>
  );
}

export default Home;
