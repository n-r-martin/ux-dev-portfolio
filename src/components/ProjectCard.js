import React, { useState, useEffect, createElement } from "react";
import $ from 'jquery';
import '../styles/Index.scss';


function ProjectCard(props) {
    const roleData = props.roles

    const roles = roleData.map((role, index) => (
      <li key={index} className='listitem'>{role}</li>
    ))

    return (
        <article id={props.id} className="project-card">
        <div className="card-circle-accent"></div>
        <div className="card-circle-shadow"></div>
        <div className="project-card-img-container"></div>  

        <div className="project-card-text-and-ui">
          <div className="project-card-text-container">

            <h4>{props.title}</h4>
            <h5>{props.subHeading}</h5>
            
            <p>{props.description}.</p>
          </div>

          <div className="card-bottom-container">
            <div className="role-marquee-container">
                    <ul className="role-marquee">
                        {roles}
                    </ul>
          </div>

          <a className="card-button-link" href="project-one.html">
            <div className="card-button-link-content">
              <p>View</p>
              <i className="fa fa-caret-right" aria-hidden="true"></i>
            </div>
          </a>
      
          </div>
        </div>
      </article>
    );
    }
export default ProjectCard;