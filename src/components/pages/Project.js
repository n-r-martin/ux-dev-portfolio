import React from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../../data/projects.json'
import { IconContext } from "react-icons/lib";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Marquee from "react-fast-marquee";

import AresView from '../projects/AresView';

const projectArr = projectData.projects;


function Project() {

    let { project }  = useParams();
    let projectStr = project.toString();

    const getProject = projectArr.find(project => project.projectPath === projectStr);

    let projectTitle = getProject.projectTitle;
    let projectHeader = getProject.projectHeader;
    let projectBody = getProject.projectBody;

    const roleData = projectHeader.projectRoles;

    if (roleData.length <= 2) {
      roleData.push(...roleData);
      roleData.push(...roleData);
    } else if (roleData.length > 2 && roleData.length <= 4) {
      roleData.push(...roleData);
    }

    let roles = roleData.map((role, index) => (
      <li key={index} className='listitem'>{role}</li>
    ))

    let renderedProject;

    switch (project) {
      case 'ares-view':
        renderedProject = <AresView title={projectTitle} projectHeader={projectHeader} roles={roles} projectBody={projectBody} />
        break;
      default:
        renderedProject = "project not found bone head"
        break;
    }
   

  return (
    <>
    <main className="project-content">
    <div className="project-header-links">
       <IconContext.Provider value={{ className: "project-external-icons", size: 24 }}>
          <a href="https://github.com/n-r-martin" target="_blank" rel="noreferrer"><FiGithub /></a>
          <a href="https://github.com/n-r-martin" target="_blank" rel="noreferrer"><FiExternalLink /></a>
      </IconContext.Provider>
    </div>
    <section className="project-heading">
      <div className="project-header-text-container">
        <h4>{projectTitle}</h4>
        <h5>{projectHeader.projectSubheading}</h5>

        <p className="project-summary">{projectHeader.projectDescription}</p>

        <div className="project-role-list-container">
          <ul className="project-role-list">
            <span className='role-list-grident-left'></span>
            <Marquee gradientWidth={10} speed={60}>
            {roles}
            </Marquee>
            <span className='role-list-grident-right'></span>
          </ul>
        </div>
      </div>
    </section>

    {renderedProject}

    {/* <div className='external-link-ui'>
      <IconContext.Provider value={{ className: "project-external-icons", size: 24 }}>
        <a href="https://github.com/n-r-martin" target="_blank" rel="noreferrer"><FiExternalLink /></a>
        <a href="https://github.com/n-r-martin" target="_blank" rel="noreferrer"><FiGithub /></a>
      </IconContext.Provider>
    </div> */}
    </main>
 
   </>
  );
}

export default Project;