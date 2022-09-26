import React from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../../data/projects.json'

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
    <main className="project-content">
      {renderedProject}
    </main>
  );
}

export default Project;